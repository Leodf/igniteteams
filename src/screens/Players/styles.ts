import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UsersThree } from "phosphor-react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Form = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;
