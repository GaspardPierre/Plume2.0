Plusieurs façons d'éviter que l'animation de la flèche reparte à zéro quand on change de dropdown avec votre code :

1. Utiliser un state global pour l'index du dropdown ouvert :

```jsx
// Dans un composant parent
const [openIndex, setOpenIndex] = useState(null);

const toggle = (index) => {
  setOpenIndex(index === openIndex ? null : index); 
}

// Dans Dropdown
const isOpen = openIndex === index;
const classNames = isOpen ? ...
```

2. Mémoriser l'état directement dans le component : 

```jsx 
// Dans Dropdown
const [isOpen, setIsOpen] = useState(false);

const toggle = () => {
  setIsOpen(prev => !prev);
}

const classNames = isOpen ? ...
```

3. Laisser la classe d'animation appliquée en permanence :

```css
/* Dans Dropdown.css */

.arrow {
  animation: rotate 0.5s forwards;
}

@keyframes rotate {
  /* ... */ 
}
```

4. Changer l'événement click pour ne pas réinitialiser:

```jsx
<img 
  onMouseDown={toggle}
/>
```

N'hésitez pas si vous avez besoin d'aide pour implémenter une de ces solutions dans votre dropdown !