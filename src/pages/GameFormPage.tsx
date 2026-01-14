import ButtonBack from "@/components/buttons/ButtonBack"
import { Button } from "@/components/ui/button"
import { PenBox, PlusIcon, Trash, Undo2 } from "lucide-react"

const GameFormPage = () => {
  return (
    <div className="contenu">
        {/* HEADER BACK */}
        <div><ButtonBack /></div><br /><br />

        {/* FORM */}
<div className="grid grid-cols-4 grid-rows-5 gap-4">
    <div className="col-span-2 bg-blue-800">Nom du jeu</div>
    <div className="col-start-3 bg-red-800">CD ? | Finish ?</div>
    <div className="col-start-4 bg-green-700">Favoris ?</div>
    <div className="row-start-2 bg-blue-800">PC ?</div>
    <div className="col-span-2 row-start-2 bg-red-800">Platform</div>
    <div className="col-start-4 row-start-2 bg-green-700">Année de sortie</div>
    <div className="col-span-4 row-start-3 bg-red-800">Notes</div>
</div>
<br /><br /><br />
<div className="grid grid-cols-4 grid-rows-5 gap-4">
    <div className="col-span-2 bg-blue-800">Nom du jeu</div>
    <div className="col-span-2 col-start-3 bg-red-800">CD ? | Finish ? | favorite ?</div>
    <div className="row-start-2 bg-blue-800">PC ?</div>
    <div className="col-span-2 row-start-2 bg-red-800">Platform</div>
    <div className="col-start-4 row-start-2 bg-green-700">Année de sortie</div>
    <div className="col-span-4 row-start-3 bg-red-800">Notes</div>
</div>
 {/* BUTTONS */}
<div className="flex items-center justify-between">
    <Button variant={"secondary"} size={"lg"} className={"text-lg"}><Undo2 /> Annuler</Button>
    <Button size={"lg"} className={"text-lg"}><PlusIcon /> Ajouter</Button>
</div>
<br />
<div className="flex items-center justify-between">
    <Button variant={"destructive"} size={"lg"} className={"text-lg"}><Trash /> Supprimer</Button>
    <Button size={"lg"} className={"text-lg"}><PenBox /> Valider</Button>
</div>
    
    </div>
  )
}

export default GameFormPage