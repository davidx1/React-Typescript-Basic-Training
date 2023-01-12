// TODO: complete the code so that it shows a list of rockets in the space port and their status.
const SpacePort = () => {
  const portRecord = {
    "ROAM-1453": "landing",
    "ROAM-2765": "landed",
    "ROAM-2465": "onLaunchPad",
  };

  return (
    <div>
      <ul>
        {Object.keys(portRecord).map((key) => {
          const status = "";
          return (
            <li>
              <label>{`${key}-${status}`}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const Exercise = () => {
  return (
    <>
      <h2>Exercise 20</h2>
      <SpacePort />
    </>
  );
};
