import { Button } from '@components/atomic/Button/Button';
import { StyledHeaderContainerMain, StyledHeaderContainer, StyledHeaderContent } from '@components/layout/header/headerStyles';

export const ComponentHeader = () => {
  const refreshPage = () => window.location.reload();

  return (
    <StyledHeaderContainerMain>
      <StyledHeaderContainer>
        <StyledHeaderContent>
          <h1>0x16c3</h1>
        </StyledHeaderContent>
      </StyledHeaderContainer>
    </StyledHeaderContainerMain>
  );
};
