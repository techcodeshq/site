import React, { useState, useRef } from "react";
import { BigText, NormalText } from "@styles";
import { Label, Container } from "@styles";
import {
  TeamSection,
  TitleWrapper,
  SectionTitle,
  SectionDescription,
  DirectorGrid,
  ImageWrapper,
  HoverWrapper,
  ListWrapper,
  TeamMember,
  HoverImageWrap,
  ListItemWrapper,
  TextWrapper,
} from "./style";
import Modal from "./modal";
import { GatsbyImage } from "gatsby-plugin-image";
import { Button } from "@components";

const Team = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [position, setPosition] = useState(null);

  function clicked(nameModal, positionModal, descriptionModal) {
    setName(nameModal);
    setDescription(descriptionModal);
    setPosition(positionModal);
    setModalOpen(true);
  }

  return (
    <TeamSection>
      <Container>
        <Modal
          name={name}
          position={position}
          description={description}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
        <TitleWrapper>
          <Label onClick={() => setModalOpen(true)}>Meet the team</Label>
          <SectionTitle>Marking it happen</SectionTitle>
          <SectionDescription>
            Our hardworking executive team. The hearts, minds, and souls behind the TechCodes
            organization changing the face of STEM.
          </SectionDescription>
        </TitleWrapper>
        <DirectorGrid>
          {data.team.map((info, index) => {
            if (info.is_director === true) {
              return (
                <ImageWrapper
                  key={index}
                  onClick={() => clicked(info.name, info.position, info.description)}>
                  <HoverWrapper>
                    <TextWrapper>
                      <BigText>{info.name}</BigText>
                    </TextWrapper>
                    <Button onClick={() => clicked(info.name, info.position, info.description)}>
                      About me
                    </Button>
                  </HoverWrapper>
                  <GatsbyImage image={info.headshot.localFile.childImageSharp.gatsbyImageData} />
                </ImageWrapper>
              );
            }
          })}
        </DirectorGrid>
        <ListWrapper>
          {data.team.map((info, index) => {
            if (info.is_director === false) {
              return (
                <ListItemWrapper>
                  <HoverImageWrap>
                    <GatsbyImage image={info.headshot.localFile.childImageSharp.gatsbyImageData} />
                  </HoverImageWrap>
                  <TeamMember
                    key={index}
                    onClick={() => clicked(info.name, info.position, info.description)}>
                    <NormalText>{info.name}</NormalText>
                    <NormalText>{info.position}</NormalText>
                  </TeamMember>
                </ListItemWrapper>
              );
            }
          })}
        </ListWrapper>
      </Container>
    </TeamSection>
  );
};

export default Team;
