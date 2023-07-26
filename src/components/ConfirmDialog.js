import React from 'react'

import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog,
  Button,
  Divider
} from '@material-ui/core'
import { palette } from '../customTheme'

export default ({
  open,
  title,
  children,
  onClose,
  onConfirm,
  maxWidth,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth={maxWidth}
    >
      <DialogTitle>{title}</DialogTitle>
      <Divider />
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions style={{ padding: 16 }}>
        <Button color="default"
          onClick={onClose}>
          Close
        </Button>
        {typeof onConfirm === 'function' && <Button variant="contained" color="primary"
          style={{ backgroundColor: palette.error.main }}
          onClick={onConfirm}>
          Confirm
        </Button>}
      </DialogActions>
    </Dialog>)
}