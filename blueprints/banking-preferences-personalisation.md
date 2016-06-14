$ Service
Personalisation of banking preferences.

$ Scenario
Emma helps her mother Lois personalize her banking preferences. Lois is having trouble reading the small font on her iPad.

	$ Step

			$ Step Definition
			Lois logs in on the banking website with Emma's help.
            ![step 1](https://cdn.rawgit.com/designing-experiences/Lush/develop/blueprints/images/lois-and-emma.jpg)

			$ Channel
			Website

			$ Actor
			Lois

			$ Actor
			Emma

			$ API, System
			Authentication API

	$ Step

			$ Step Definition
			Emma and Lois search frantically for the changing the font on the website.
			![step 1](https://cdn.rawgit.com/designing-experiences/Lush/develop/blueprints/images/lois-and-emma.jpg)

			$ Channel
			Website

			$ Actor
			Lois

			$ Actor
			Emma

			$ Observation, fact
			Search on the website doesn't always deliver the desired results.

	$ Step

			$ Step Definition
			Unable to find the way out, they call the "Call Center". They are asked to identify themselves. The Call Center employee informs that the bank provides thematic customizations. And one of them is especially for the elderly. Happy to try it out, Emma and Lois try to locate the settings. Meanwhile the session times-out. They login again. And are able to locate the settings with the help of the call center employee. The settings are presented as a wizard. Feeling good about this, they hang up.
			![step 3](https://cdn.rawgit.com/designing-experiences/Lush/develop/blueprints/images/call-center.jpg)

			$ Actor
			Lois

			$ Actor
			Emma

			$ Actor
			Call center employee

			$ Policy, rule
		        Session times out in x minutes

			$ Metric
			Average call duration

	$ Step

			$ Step Definition
			Emma and Lois configure the look-n-feel for the banking website. They choose the font size "Large". They are shown a preview. They like the new changes and confirm them. The change takes effect immediately.
			![step 4](https://cdn.rawgit.com/designing-experiences/Lush/develop/blueprints/images/website-preferences.jpg)

			$ Actor
			Lois

			$ Actor
			Emma

			$ API, System
			Banking preferences API

			$ Metric
			Number of usages

			$ Metric
			Number of switches back & forth.

			$ Metric
			Preference usage statistics.

			$ Critical Moment
			The preview of the new settings is of utmost importance to seal the deal.

			$ Idea
			Disable irrelevant products Investment, Mortgage and Credit-card tabs.

			$ Idea
			Set the default account.

			$ Idea
			Tone down the details shown with every transaction.

			$ Idea
			Ability to "Undo" the last preference.

			$ Idea
			The wizard is handy. It would be nice to see the effect of these preferences shown in another way.

	$ Step

			$ Step Definition
			Emma and Lois configure the look-n-feel for the Mobile Banking App. The wizard asks them to get their device. They log in on their mobile app and continue setting their app preferences. They choose to receive push notifications when the pension money arrives. They are shown a preview. They like the new changes and confirm them. The change takes effect immediately.
			![step 5](https://cdn.rawgit.com/designing-experiences/Lush/develop/blueprints/images/app-preferences.jpg)

			$ Actor
			Lois

			$ Actor
			Emma

			$ API, System
			Banking preferences API

			$ Metric
			Number of usages

			$ Metric
			Number of switches back & forth.

			$ Metric
			Preference usage statistics.

			$ Idea
			Ability to "Undo" the last preference.

			$ Idea
			The wizard is handy. It would be nice to see the effect of these preferences shown in another way.

			$ Idea
			Save X amount monthly by transferring to the Savings Account.

			$ Idea
			Transfer money to loved ones once a month.

	$ Step

			$ Step Definition
			Emma and Lois configure the look-n-feel for the ATM. They choose for a weekly withdrawal limit of 100 euros. They are shown a preview. They like the new changes and confirm them. The change takes effect immediately.
			![step 6](https://cdn.rawgit.com/designing-experiences/Lush/develop/blueprints/images/atm-preferences.jpg)

			$ Actor
			Lois

			$ Actor
			Emma

			$ API, System
			Banking preferences API

			$ Metric
			Number of usages

			$ Metric
			Number of switches back & forth.

			$ Metric
			Preference usage statistics.

			$ Observation, Fact
			The elderly (> 67 years) , especially use the weekly cash withdrawal limit preference.

			$ Idea
			Ability to "Undo" the last preference.

			$ Idea
			The wizard is handy. It would be nice to see the effect of these preferences shown in another way.

    $ Step

            $ Step Definition
            Emma and Lois leave their feedback on this experience.
            ![step 7](https://cdn.rawgit.com/designing-experiences/Lush/develop/blueprints/images/feedback.jpg)

            $ Actor
            Lois

            $ Actor
            Emma

            $ API, System
            Feedback API

            $ Metric
            Feedback count

            $ Metric
            Feedback usage statistics