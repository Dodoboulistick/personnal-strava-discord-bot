const { SlashCommandBuilder } = require('discord.js');
var getUnixTime = require('date-fns/getUnixTime')
var subMonths = require('date-fns/subMonths')

const Run = require('./../Run.js');

const getKudos = async () => {
    let res = await Run.build(getUnixTime(subMonths(new Date(), 1)))
    return res.kudos
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kudos')
		.setDescription('Donne les kudos obtenus par Dorian ces 30 derniers jours (merci la team)'),
	async execute(interaction) {
		await interaction.reply(
            `Dorian a obtenu ${await getKudos()} kudos ces 30 derniers jours.`
        );
	},
};
