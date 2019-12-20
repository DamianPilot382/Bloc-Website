(function () {
  self.onmessage = function (e) {
    var blocks = e.data,
    invalidBlocks = validateBlocks(blocks);
    self.postMessage(invalidBlocks);
  };

  function validateBlocks(blockIds) {
    var invalidBlocks = [];
    Object.keys(blockIds)
      .sort(function (firstId, secondId) {
        return blockIds[firstId].positionY - blockIds[secondId].positionY;
      })
      .forEach(function (id) {
        var block = blockIds[id],
          validCount = 0,
          isValid = !block.positionY ||
            block.connected.some(function (el) {
              var blockHasValidBase = blockIds[el].positionY < block.positionY && !blockIds[el].transparent;
              if (blockHasValidBase) {
                validCount += 1;
              }
              return block.needsTwoValidBlocks ? validCount > 1 : blockHasValidBase;
            });

        if (!isValid) {
          invalidBlocks.push(parseInt(id));
        }

        block.transparent = !isValid;
      });

    return invalidBlocks;
  }

})();
