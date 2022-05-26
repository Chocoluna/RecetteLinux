import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function RightAlert() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="outlined" severity="success">
        This is a success alert — check it out!
      </Alert>
    </Stack>
  );
}

/*export function WrongAlert(){
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="outlined" severity="warning">
        This is a warning alert — check it out!
      </Alert>
    </Stack>
  );
}*/
