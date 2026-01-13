import Header from "@/components/layout/Header"

const SettingsPage = () => {
  return (
    <div className="contenu">
        <Header icon={undefined} isButton={false} page={""} nameButton={""} title={"Settings"} />

    <p>Setting diviser en carte | Preferences | Profile | Account | Support | delete</p><br /><br />
        <div>
            <p>Preferences = Language - theme</p>
            <p>Profile = update pseudo + porfile public</p>
            <p>Account = update email - update password - Export your data ?</p>
            <p>Support = Contact us</p>
            <p>Delete account</p>
        </div>
    </div>
  )
}

export default SettingsPage