const run = (entity, actions) => {
  for (let action of actions) {
    entity = action(entity);
  }

  return entity;
};

export default run;
