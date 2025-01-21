import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TimeLine from './TimeLine';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function Experience() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen} size="small">
        Experience
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <TimeLine
          position="associate software engineer"
          company="Ridecell"
          duration="2024 - Present"
          description={[
            '• Collaborated on deploying scalable systems to onboard 25,000+ vehicles, streamlining operations for rental services.',
            '• Refactored critical components to reduce production bugs by 30%, improving platform stability.',
            '• Collaborated on AI-powered pricing and fleet damage detection tools, enhancing efficiency for 500+ customers.',
            '• Resolved 20+ high-priority issues, improving reliability for car-sharing platforms.',
            '• Design RESTful APIs and integrate with frontend systems and third-party services.',
            '• Participating in code reviews, contributing to a testing and automation culture, and supporting our quality practices.',
          ]}
        />
      </BootstrapDialog>
    </React.Fragment>
  );
}
