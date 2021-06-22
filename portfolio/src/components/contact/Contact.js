
// input
<form className={classes.root} noValidate autoComplete="off">
  <Input defaultValue="Hello world" inputProps={{ 'aria-label': 'description' }} />
  <Input placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }} />
  <Input defaultValue="Disabled" disabled inputProps={{ 'aria-label': 'description' }} />
  <Input defaultValue="Error" error inputProps={{ 'aria-label': 'description' }} />
</form>

// color
<form className={classes.root} noValidate autoComplete="off">
 
  <TextField
    id="filled-secondary"
    label="Filled secondary"
    variant="filled"
    color="secondary"
  />

</form>