const { sum, difference } = require("./calc");



    test(" 1 + 2 should be 3", () => {
      const result = sum(1, 2);
      expect(result).toBe(3);
    });
    test(" 127 + 5 should be 132", () => {
      const result = sum(127, 5);
      expect(result).toBe(132);
    });

  




