// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));