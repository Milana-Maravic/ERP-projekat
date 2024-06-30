import React from 'react';
import { Typography, Box } from '@mui/material';
import { Transition, TransitionStatus } from 'react-transition-group';

const duration = 500;

const defaultStyle = {
  transition: `transform ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`,
  transform: 'translateY(50px)',
  opacity: 0,
};

const transitionStyles: { [key in TransitionStatus]: React.CSSProperties } = {
  entering: { transform: 'translateY(50px)', opacity: 0 },
  entered: { transform: 'translateY(0)', opacity: 1 },
  exiting: { transform: 'translateY(50px)', opacity: 0 },
  exited: { transform: 'translateY(50px)', opacity: 0 },
  unmounted: {},
};

const AboutPage: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      sx={{
        padding: '0 2rem',
        backgroundColor: '#f5f5f5',
      }}
    >
      <img
        src="/gear.jpg"
        alt="Welcome"
        style={{
          width: "55%",
          height: "auto",
          borderRadius: 10,
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          marginBottom: '5rem',
          transform: 'scale(1.05)',
          transition: 'transform 0.3s ease-in-out',
          marginTop: '45rem'
        }}
      />
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ 
          fontWeight: 'bold',
          color: '#333',
          textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
        }}
      >
        Dobrodošli u Climber!
      </Typography>
      <Transition in={true} timeout={duration} appear>
        {(state) => (
          <Box
            maxWidth={600}
            textAlign="center"
            sx={{
              ...defaultStyle,
              ...transitionStyles[state],
              backgroundColor: '#fff',
              padding: '2rem',
              borderRadius: 8,
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              border: '1px solid #ddd',
              marginBottom: '2rem'
            }}
          >
            <Typography variant="body1" paragraph sx={{ color: '#555', marginBottom: '1rem' }}>
              Mi smo tim strastvenih planinara i ljubitelja prirode koji su odlučili da svoje iskustvo i strast podelimo sa vama.
              Naša misija je da vam omogućimo najbolje moguće iskustvo u prirodi kroz visokokvalitetnu opremu za planinarenje i avanturističke aktivnosti.
            </Typography>
          </Box>
        )}
      </Transition>
      <Box
        maxWidth={600}
        textAlign="center"
        sx={{
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: 8,
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          border: '1px solid #ddd',
          marginBottom: '2rem'
        }}
      >
        <Typography variant="body1" paragraph sx={{ color: '#555', marginBottom: '1rem', marginTop: '2rem' }}>
          <strong>Ko smo mi?</strong> <br />
          Climber je online radnja specijalizovana za prodaju opreme za planinarenje i sve što vam je potrebno za istraživanje prirode.
          Naš tim čine iskusni planinari i outdoor entuzijasti koji razumeju vaše potrebe i želje.
          Kroz godine iskustva na stazi i u kampovanju, razvili smo duboko razumevanje šta je zaista važno kada je reč o planinarenju.
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#555', marginBottom: '1rem' }}>
          <strong>Šta nudimo?</strong> <br />
          U našem asortimanu ćete pronaći pažljivo odabranu opremu koja se ističe po kvalitetu i funkcionalnosti:
          <ul style={{ padding: 0, listStyle: 'none', textAlign: 'left' }}>
            <li><strong>Planinarske čizme i obuća:</strong> Najbolje cipele koje vam pružaju podršku i udobnost na svakom terenu.</li>
            <li><strong>Rance i torbe za planinarenje:</strong> Oprema koja vam pomaže da organizujete i nosite svoje stvari tokom avantura.</li>
            <li><strong>Šatori i spavaće vreće:</strong> Oprema koja vam osigurava udoban san i zaštitu tokom kampovanja.</li>
            <li><strong>Planinarski štapovi:</strong> Praktični alati za stabilnost i podršku tokom vaših uspona.</li>
            <li><strong>Flašice i pribor:</strong> Kvalitetan pribor i flašice koje će čuvati vašu hranu i piće.</li>
          </ul>
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#555', marginBottom: '2rem' }}>
          Posetite našu prodavnicu danas i pronađite sve što vam treba za planinarenje!
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutPage;
