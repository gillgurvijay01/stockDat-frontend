import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  TextField,
} from '@mui/material';

const EditModal = ({ open, onClose, rowData, onEdit }) => {
  const [editedData, setEditedData] = useState(rowData);

  const handleEdit = () => {
    // Perform your edit logic here, for example:
    onEdit(editedData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Item</DialogTitle>
      <DialogContent>
        {/* Use TextField or any other input components to edit the data */}
        <TextField
          label="Edit Field"
          value={editedData.yourField} // Replace 'yourField' with the actual field you want to edit
          onChange={(e) => setEditedData({ ...editedData, yourField: e.target.value })}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleEdit} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default EditModal