const { SlashCommandBuilder } = require('discord.js');
var getUnixTime = require('date-fns/getUnixTime')
var subMonths = require('date-fns/subMonths')

const Run = require('./../Run.js');

const getDistance = async () => {
    let res = await Run.build(getUnixTime(subMonths(new Date(), 1)))
    return res.distanceLastMonth
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('distancemois')
		.setDescription('Donne la distance totale parcourue par Dorian ces 30 derniers jours'),
	async execute(interaction) {
		await interaction.reply(
            `Dorian a couru ${await getDistance()}km ces 30 derniers jours.`
        );
	},
};
