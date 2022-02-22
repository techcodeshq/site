import React, { useState } from "react";
import { NormalText } from "@styles";
import { Label, Container } from "@styles";
import { TeamSection, TitleWrapper, SectionTitle, SectionDescription, DirectorGrid } from "./style";
import Modal from "./modal";

const Team = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <TeamSection>
      <Container>
        <Modal
          name="Kyrylo Orlov"
          position="Vice President"
          description="Hi everyone! My name is Kyrylo Orlov, and I am the vice president of TechCodes. TechCodes’s mission has always been to provide all students the opportunity to learn computer science. During my time here at TechCodes, my focus has not only been to deliver on that mission but go beyond it. I believe that technology is here to make the world a better place and I can’t wait to spark your interest and share my experience of computer science with you all."
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
          <DirectorGrid></DirectorGrid>
        </TitleWrapper>
      </Container>
    </TeamSection>
  );
};

export default Team;
