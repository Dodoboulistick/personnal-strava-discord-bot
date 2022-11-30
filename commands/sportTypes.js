const { SlashCommandBuilder } = require('discord.js');
var getUnixTime = require('date-fns/getUnixTime')
var subMonths = require('date-fns/subMonths')

const Run = require('./../Run.js');

const getSportTypes = async () => {
    let res = await Run.build(getUnixTime(subMonths(new Date(), 1)))
    return res.sportTypes
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('typesdesports')
		.setDescription('Donne les types de sports pratiqués par Dorian ces 30 derniers jours'),
	async execute(interaction) {
		await interaction.reply(
            `Liste des sports : ${await getSportTypes()}.`
        );
	},
};
