const { SlashCommandBuilder } = require('discord.js');
var getUnixTime = require('date-fns/getUnixTime')
var subMonths = require('date-fns/subMonths')

const Run = require('../Run.js');

const getAverageHeartRate = async () => {
    let res = await Run.build(getUnixTime(subMonths(new Date(), 1)))
    return res.averageHeartRate
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rythmecardiaque')
		.setDescription('Donne le rythme cardiaque moyen de Dorian sur ses activités ces 30 derniers jours'),
	async execute(interaction) {
		await interaction.reply(
            `Dorian a un rythme cardiaque moyen de ${await getAverageHeartRate()} sur ses activités ces 30 derniers jours.`
        );
	},
};
