import styled from 'styled-components';
import SimpleWrapper from '~/components/Common/SimpleWrapper';

export const Wrapper = styled(SimpleWrapper)`
  padding: 100px 0 0;

  @media (max-width: 414px) {
    padding: 70px 0 0;
  }
`;

export const H6 = styled.h6`
  padding: 3px;
  backgroundColor: rgba(255,255,255, 0.5);
`;
