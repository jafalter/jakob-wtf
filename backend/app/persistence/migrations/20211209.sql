CREATE TABLE IF NOT EXISTS `Visits`
(
    `id`       INTEGER PRIMARY KEY AUTO_INCREMENT,
    `session`  VARCHAR(255) NOT NULL,
    `host`     VARCHAR(255) NOT NULL,
    `path`     VARCHAR(255) NOT NULL,
    `dateTime` DATETIME     NOT NULL
);

CREATE INDEX `visits_session` ON `Visits` (`session`);
CREATE INDEX `visits_date_time` ON `Visits` (`dateTime`);
CREATE INDEX `visits_host` ON `Visits` (`host`);