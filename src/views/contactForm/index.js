import React, { useState } from "react";
import { Container, FormGroup, NormalText } from "@styles";
import { ContactSection, ContactTitle, GridSplit, LeftCol, RightCol, SuccessSubmit } from "./style";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@components";

const ContactSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email field is required"),
  fname: Yup.string().required("First name is required"),
  lname: Yup.string().required("Last name is required"),
  message: Yup.string().required("Please type in a message"),
});

const ContactForm = () => {
  const [success, setSuccess] = useState(false);

  return (
    <ContactSection>
      <Container>
        <GridSplit>
          <LeftCol>
            <ContactTitle>Questions?</ContactTitle>
            <ContactTitle>Inquiries?</ContactTitle>
            <ContactTitle>Let's talk.</ContactTitle>
            <NormalText>
              Interested in working with us to improve STEM? Have any questions about what we do and
              what we stand for? We'd love to get in touch.
            </NormalText>
            <NormalText>
              Use this form or email us at:{" "}
              <a href="mailto:team@techcodes.org" target="_blank" rel="noopener noreferrer">
                team@techcodes.org
              </a>
            </NormalText>
          </LeftCol>
          <RightCol>
            {success ? (
              <SuccessSubmit>
                <NormalText>
                  Thank you for your submission. We'll get back to you within the next 24 hours.
                </NormalText>
              </SuccessSubmit>
            ) : (
              <Formik
                initialValues={{
                  email: undefined,
                  fname: undefined,
                  lname: undefined,
                  message: undefined,
                }}
                validationSchema={ContactSchema}
                onSubmit={(values, { setSubmitting }) => {
                  setSubmitting(true);
                  const subject =
                    "New contact form submission from " + values.fname + " " + values.lname;
                  const body = { from: values.email, subject: subject, text: values.message };

                  fetch("https://api.techcodes.org/mail", {
                    method: "POST",
                    headers: {
                      "content-type": "application/json",
                      authorization: "950a425e-d015-4382-a370-77dc0b1ac76b",
                    },
                    body: JSON.stringify(body),
                  })
                    .then(() => setSuccess(true))
                    .catch(err => alert(err));

                  setSubmitting(false);
                }}>
                {({ isSubmitting, isValid, dirty }) => (
                  <Form>
                    <FormGroup>
                      <label htmlFor="fname">First name</label>
                      <Field
                        type="text"
                        name="fname"
                        placeholder="First name"
                        autocomplete="given-name"
                      />
                      <ErrorMessage component="span" name="fname" />
                    </FormGroup>
                    <FormGroup>
                      <label htmlFor="fname">Last name</label>
                      <Field
                        type="text"
                        name="lname"
                        placeholder="Last name"
                        autocomplete="family-name"
                      />
                      <ErrorMessage component="span" name="lname" />
                    </FormGroup>
                    <FormGroup>
                      <label htmlFor="email">Email</label>
                      <Field type="email" name="email" placeholder="Email" autocomplete="email" />
                      <ErrorMessage component="span" name="email" />
                    </FormGroup>
                    <FormGroup>
                      <label htmlFor="message">Message</label>
                      <Field as="textarea" name="message" placeholder="Message" />
                      <ErrorMessage component="span" name="message" />
                    </FormGroup>
                    <Button disabled={!isValid || !dirty || isSubmitting} type="submit">
                      Submit
                    </Button>
                  </Form>
                )}
              </Formik>
            )}
          </RightCol>
        </GridSplit>
      </Container>
    </ContactSection>
  );
};

export default ContactForm;
