DROP TABLE IF EXISTS `RegionalTexts`;
DROP TABLE IF EXISTS `Languages`;
DROP TABLE IF EXISTS `Resources`;
DROP TABLE IF EXISTS `Articles`;
DROP TABLE IF EXISTS `Texts`;
DROP TABLE IF EXISTS `Categories`;
CREATE TABLE IF NOT EXISTS `Categories`
(
    `id`        INTEGER      NOT NULL auto_increment,
    `value`     VARCHAR(255) NOT NULL,
    `createdAt` DATETIME     NOT NULL,
    `updatedAt` DATETIME     NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS `Texts`
(
    `id`        INTEGER  NOT NULL auto_increment,
    `createdAt` DATETIME NOT NULL,
    `updatedAt` DATETIME NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS `Articles`
(
    `id`         INTEGER      NOT NULL auto_increment,
    `image`      VARCHAR(255) NOT NULL,
    `createdAt`  DATETIME     NOT NULL,
    `updatedAt`  DATETIME     NOT NULL,
    `categoryId` INTEGER,
    `titleId`    INTEGER,
    `subtextId`  INTEGER,
    `keyId`      INTEGER,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`categoryId`) REFERENCES `Categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY (`titleId`) REFERENCES `Texts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY (`subtextId`) REFERENCES `Texts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY (`keyId`) REFERENCES `Texts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS `Resources`
(
    `id`          INTEGER auto_increment,
    `url`         TEXT,
    `description` TEXT,
    `createdAt`   DATETIME NOT NULL,
    `updatedAt`   DATETIME NOT NULL,
    `categoryId`  INTEGER,
    `titleId`     INTEGER,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`categoryId`) REFERENCES `Categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY (`titleId`) REFERENCES `Texts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS `Languages`
(
    `id`        INTEGER      NOT NULL auto_increment,
    `value`     VARCHAR(255) NOT NULL,
    `createdAt` DATETIME     NOT NULL,
    `updatedAt` DATETIME     NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS `RegionalTexts`
(
    `id`         INTEGER      NOT NULL auto_increment,
    `value`      VARCHAR(255) NOT NULL,
    `createdAt`  DATETIME     NOT NULL,
    `updatedAt`  DATETIME     NOT NULL,
    `textId`     INTEGER,
    `languageId` INTEGER,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`textId`) REFERENCES `Texts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY (`languageId`) REFERENCES `Languages` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB;