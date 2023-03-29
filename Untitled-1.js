const currentDir = dirname(fileURLToPath(import.meta.url));
fs.mkdir(path.join(currentDir, 'memes'), (err) => {
  if (err) {
    return console.error('Directory already exists!');
  }
  console.log('Directory created successfully!');
});
