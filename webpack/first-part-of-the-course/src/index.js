// import sum from './sum';
// import './image_viewer';

// const total = sum(10, 5);
// console.log({ total });

const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = async () => {
  try {
    const module = await import('./image_viewer');
    module.default();
  } catch (error) {
    console.error(error);
  }
};

document.body.appendChild(button);
