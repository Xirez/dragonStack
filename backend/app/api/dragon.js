const { Router } = require('express');
const DragonTable = require('../dragon/table.js');
const AccountDragonTable = require('../accountDragon/table');
const { authenticatedAccount } = require('./helper');

const router = new Router();

router.get('/new', (req, res, next) =>{
  let accountId, dragon;

  authenticatedAccount({ sessionString: req.cookies.sessionString })
    .then(({ account }) => {
      accountId = account.id;

      dragon = req.app.locals.engine.generation.newDragon({ accountId });

      return DragonTable.storeDragon(dragon);
    })
    .then(({ dragonId }) => {
      dragon.dragonId = dragonId;

      console.log('resolved dragonId', dragonId);

      return AccountDragonTable.storeAccountDragon({ accountId, dragonId });
    })
    .then(() => res.json({ dragon }))
    .catch(error => next(error));
});

module.exports = router;