import { useState, memo } from "react"
import { Trans } from "react-i18next"
import { VSCodeLink } from "@vscode/webview-ui-toolkit/react"

import { Package } from "@roo/package"
import { useAppTranslation } from "@src/i18n/TranslationContext"
import { useExtensionState } from "@src/context/ExtensionStateContext"
import { vscode } from "@src/utils/vscode"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@src/components/ui"
import { Button } from "@src/components/ui"

interface AnnouncementProps {
	hideAnnouncement: () => void
}

/**
 * You must update the `latestAnnouncementId` in ClineProvider for new
 * announcements to show to users. This new id will be compared with what's in
 * state for the 'last announcement shown', and if it's different then the
 * announcement will render. As soon as an announcement is shown, the id will be
 * updated in state. This ensures that announcements are not shown more than
 * once, even if the user doesn't close it themselves.
 */

const Announcement = ({ hideAnnouncement }: AnnouncementProps) => {
	const { t } = useAppTranslation()
	const [open, setOpen] = useState(true)
	const { cloudIsAuthenticated } = useExtensionState()

	return (
		<Dialog
			open={open}
			onOpenChange={(open) => {
				setOpen(open)

				if (!open) {
					hideAnnouncement()
				}
			}}>
			<DialogContent className="max-w-96">
				<DialogHeader>
					<DialogTitle>{t("chat:announcement.title", { version: Package.version })}</DialogTitle>
				</DialogHeader>
				<div className="space-y-4">
					{/* Version Description */}
					<div className="text-sm text-vscode-descriptionForeground">
						<Trans
							i18nKey="chat:announcement.description"
							components={{
								bold: <b className="text-vscode-foreground" />,
							}}
						/>
					</div>

					{/* Features List */}
					<div>
						<h4 className="text-sm font-semibold mb-2 text-vscode-foreground">
							{t("chat:announcement.whatsNew")}
						</h4>
						<div className="space-y-2">
							<div className="text-sm flex items-start gap-2">
								<span className="text-base">1️⃣</span>
								<Trans
									i18nKey="chat:announcement.feature1"
									components={{
										bold: <b className="text-vscode-foreground" />,
									}}
								/>
							</div>
							<div className="text-sm flex items-start gap-2">
								<span className="text-base">2️⃣</span>
								<Trans
									i18nKey="chat:announcement.feature2"
									components={{
										bold: <b className="text-vscode-foreground" />,
									}}
								/>
							</div>
							<div className="text-sm flex items-start gap-2">
								<span className="text-base">3️⃣</span>
								<Trans
									i18nKey="chat:announcement.feature3"
									components={{
										bold: <b className="text-vscode-foreground" />,
									}}
								/>
							</div>
							<div className="text-sm flex items-start gap-2">
								<span className="text-base">4️⃣</span>
								<Trans
									i18nKey="chat:announcement.feature4"
									components={{
										bold: <b className="text-vscode-foreground" />,
									}}
								/>
							</div>
							<div className="text-sm flex items-start gap-2">
								<span className="text-base">5️⃣</span>
								<Trans
									i18nKey="chat:announcement.feature5"
									components={{
										bold: <b className="text-vscode-foreground" />,
									}}
								/>
							</div>
						</div>
					</div>

					{/* Slogan */}
					<div className="text-center py-2 border-t border-vscode-widget-border">
						<div className="text-sm font-medium text-vscode-foreground">
							<Trans
								i18nKey="chat:announcement.slogan"
								components={{
									bold: <b />,
								}}
							/>
						</div>
					</div>

					{/* Close Button */}
					<div className="flex justify-end">
						<Button
							variant="secondary"
							onClick={() => {
								setOpen(false)
								hideAnnouncement()
							}}
							className="px-4">
							{t("chat:announcement.hideButton")}
						</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}

export default memo(Announcement)
