export const MENU_CATEGORIES = [
  { value: 'cold-beverages', label: 'Cold Beverages & Frappes' },
  { value: 'breakfast',      label: 'Breakfast Plates & Omelettes' },
  { value: 'sandwiches',     label: 'Sandwiches & Flatbreads' },
  { value: 'pastries',       label: 'Pastries, Cookies & Cakes' },
];

export const MENU_PREFERENCES = [
  { value: 'sweet',   label: 'Sweet Treats' },
  { value: 'savory',  label: 'Savory Meals' },
  { value: 'seafood', label: 'Seafood' },
  { value: 'meat',    label: 'Contains Meat' },
];

export const CATEGORY_LABEL = Object.fromEntries(
  MENU_CATEGORIES.map(c => [c.value, c.label])
);

export const PREF_LABEL = Object.fromEntries(
  MENU_PREFERENCES.map(p => [p.value, p.label])
);

export const TAG_STYLES = {
  sweet:   { background: '#fff8f0', border: '#f0d9b5', color: '#8a5a00' },
  savory:  { background: '#f0f5ff', border: '#c5d5f5', color: '#2a45a0' },
  seafood: { background: '#f0fbf7', border: '#b5e5d5', color: '#0a6045' },
  meat:    { background: '#fff0f0', border: '#f5c5c5', color: '#a02020' },
};  
