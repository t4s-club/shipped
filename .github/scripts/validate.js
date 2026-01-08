const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const errors = [];

// Validate profile files
function validateProfile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(content);

  const required = ['handle', 'name'];
  for (const field of required) {
    if (!data[field]) {
      errors.push(`${filePath}: missing required field '${field}'`);
    }
  }

  // Validate handle matches directory
  const expectedHandle = path.basename(path.dirname(filePath));
  if (data.handle && data.handle !== expectedHandle) {
    errors.push(`${filePath}: handle '${data.handle}' doesn't match directory '${expectedHandle}'`);
  }
}

// Validate ship files
function validateShip(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(content);

  const required = ['handle', 'date', 'category'];
  for (const field of required) {
    if (!data[field]) {
      errors.push(`${filePath}: missing required field '${field}'`);
    }
  }

  // Validate date format (YAML parses dates as Date objects)
  if (data.date) {
    const dateStr = data.date instanceof Date
      ? data.date.toISOString().split('T')[0]
      : String(data.date);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
      errors.push(`${filePath}: date must be in YYYY-MM-DD format`);
    }
  }

  // Validate category
  const validCategories = ['feature', 'fix', 'docs', 'release', 'refactor', 'design', 'other'];
  if (data.category && !validCategories.includes(data.category)) {
    errors.push(`${filePath}: invalid category '${data.category}'. Valid: ${validCategories.join(', ')}`);
  }

  // Validate tags is array
  if (data.tags && !Array.isArray(data.tags)) {
    errors.push(`${filePath}: tags must be an array`);
  }
}

// Find and validate all files
function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walkDir(filePath, callback);
    } else if (file.endsWith('.md')) {
      callback(filePath);
    }
  });
}

// Validate profiles
walkDir('people', (filePath) => {
  console.log(`Validating profile: ${filePath}`);
  validateProfile(filePath);
});

// Validate ships
walkDir('shipped', (filePath) => {
  console.log(`Validating ship: ${filePath}`);
  validateShip(filePath);
});

// Report results
if (errors.length > 0) {
  console.error('\nValidation errors:');
  errors.forEach(err => console.error(`  - ${err}`));
  process.exit(1);
} else {
  console.log('\nAll files validated successfully!');
}
