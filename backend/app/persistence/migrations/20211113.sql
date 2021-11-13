CREATE TABLE IF NOT EXISTS `ResourceTypes`
(
    `id`        INTEGER      NOT NULL auto_increment,
    `value`     VARCHAR(255) NOT NULL,
    `createdAt` DATETIME     NOT NULL,
    `updatedAt` DATETIME     NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB;

alter table Resources
    add author VARCHAR(255) not null;

alter table Resources
    add type INTEGER not NULL;

ALTER Table `Articles` default charset = utf8;
ALTER Table `Categories` default charset = utf8;
ALTER Table `Languages` default charset = utf8;
ALTER Table `RegionalTexts` default charset = utf8;
ALTER Table `Resources` default charset = utf8;
ALTER Table `ResourceTypes` default charset = utf8;
ALTER Table `Texts` default charset = utf8;

alter table Resources
    add constraint Resources_ResourceTypes_id_fk
        foreign key (type) references ResourceTypes (id);