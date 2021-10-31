DROP TABLE IF EXISTS `Resources`;
CREATE TABLE IF NOT EXISTS `Resources`
(
    `id`          INTEGER auto_increment,
    `url`         TEXT,
    `audio`       TEXT,
    `title`       TEXT.
    `createdAt`   DATETIME NOT NULL,
    `updatedAt`   DATETIME NOT NULL,
    `categoryId`  INTEGER,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`categoryId`) REFERENCES `Categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB;