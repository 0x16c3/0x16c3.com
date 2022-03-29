import { NextPage } from 'next';

import { Button } from '@components/atomic/Button/Button';

import { StyledSectionContainerAboutMain, StyledSectionContainerAbout, StyledSectionContentAbout, StyledSectionContentLinks } from '@components/layout/sectionAbout/sectionAboutStyles';

export const ComponentSectionAbout: NextPage = () => {
  return (
    <>
      <StyledSectionContainerAboutMain>
        <StyledSectionContainerAbout>
          <StyledSectionContentAbout>
            <p>I like developing media-related applications and I&apos;m interested in music/sound design. I also enjoy playing games and working on game concepts.</p>
            <p>As a self-taught person, I&apos;m currently more focused on learning game programming with UE/Godot, backend/frontend development using React and FastAPI, and developing third-party applications using C/C++ or Python.</p>
            <p>I&apos;ve also been involved in hackathons such as the Türk Telekom Smart Technologies Hackathon which my team&apos;s project got a second place in.</p>
          </StyledSectionContentAbout>
          <StyledSectionContentLinks>
            <a href="https://github.com/0x16c3">GitHub</a>
            <a href="https://twitter.com/0x16c3">Twitter</a>
            <a href="https://instagram.com/0x16c3">Instagram</a>
          </StyledSectionContentLinks>
        </StyledSectionContainerAbout>
      </StyledSectionContainerAboutMain>
    </>
  );
};
