import { useTranslation } from "react-i18next"

export function RooCloudCTA() {
	const { t } = useTranslation("chat")

	return (
		<div className="border border-muted/20 px-4 py-3 text-center flex items-start gap-2">
			<div className="text-left space-y-2">
				<div className="space-y-1">
					<h3 className="font-bold text-lg">{t("rooCloudCTA.title")}</h3>
					<p className="text-sm text-vscode-descriptionForeground leading-relaxed">
						{t("rooCloudCTA.subtitle")}
					</p>
				</div>

				<div className="space-y-2">
					<div className="grid grid-cols-1 gap-1 text-sm">
						<div className="flex items-center gap-2">
							<span>💻</span>
							<span>{t("rooCloudCTA.features.code")}</span>
						</div>
						<div className="flex items-center gap-2">
							<span>🏗️</span>
							<span>{t("rooCloudCTA.features.architect")}</span>
						</div>
						<div className="flex items-center gap-2">
							<span>❓</span>
							<span>{t("rooCloudCTA.features.ask")}</span>
						</div>
						<div className="flex items-center gap-2">
							<span>🪲</span>
							<span>{t("rooCloudCTA.features.debug")}</span>
						</div>
						<div className="flex items-center gap-2">
							<span>🔍</span>
							<span>{t("rooCloudCTA.features.review")}</span>
						</div>
						<div className="flex items-center gap-2">
							<span>🪃</span>
							<span>{t("rooCloudCTA.features.orchestrator")}</span>
						</div>
					</div>
				</div>

				<div className="pt-2">
					<p className="text-sm font-medium text-vscode-descriptionForeground">{t("rooCloudCTA.slogan")}</p>
				</div>
			</div>
		</div>
	)
}

export default RooCloudCTA
