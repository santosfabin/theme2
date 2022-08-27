import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { Container } from './styles';

interface Props {
  toggleTheme(): void;
}

export function Header<Props>({ toggleTheme }: any) {
  const { colors, title } = useContext(ThemeContext);
  return (
    <>
      <Container>
        Hello world
        <Switch
          onChange={toggleTheme}
          checked={title === 'light'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.5, colors.primary)}
          onColor={shade(0.5, colors.primary)}
        />
      </Container>
    </>
  );
}
