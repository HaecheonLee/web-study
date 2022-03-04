import { ColorConsumer } from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColors = () => {
  return (
    <div>
      <h2>Choose color: </h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: 'flex'}}>
            {colors.map(color => (
              <div
                key={color}
                style={{ background: color, width: '24px', height: '24px', cursor: 'pointer' }}
                onClick={() => actions.setColor(color)}
                onContextMenu={e => {
                  // mouse right click event
                  e.preventDefault(); // prevent from displaying menu when mouse right clicked
                  actions.setSubcolor(color);
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  );
};

export default SelectColors;
