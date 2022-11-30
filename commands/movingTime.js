const { SlashCommandBuilder } = require('discord.js');
var getUnixTime = require('date-fns/getUnixTime')
var subMonths = require('date-fns/subMonths')

const Run = require('../Run.js');

const getMovingTime = async () => {
    let res = await Run.build(getUnixTime(subMonths(new Date(), 1)))
    return res.movingTime
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tempsmouvement')
		.setDescription('Donne le temps total d\'activité ces 30 derniers jours en minutes'),
	async execute(interaction) {
		await interaction.reply(
            `Dorian a cumulé ${await getMovingTime()}min d'activité ces 30 derniers jours.`
        );
	},
};
