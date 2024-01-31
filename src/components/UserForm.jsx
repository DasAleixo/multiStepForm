const UserForm = ({ data, updateFieldHandler}) => {
  return (
    <div>
      <label className="flex flex-col mb-8 mt-10">
        <span className="mb-2 font-bold">Nome:</span>
        <input type="text" name="name" placeholder="Digite o seu nome" 
        className="rounded-lg  p-2 shadow-sm" onChange={(e) => updateFieldHandler("name", e.target.value)} value={data.name || ""} required/>
      </label>

      <label className="flex flex-col">
        <span className="mb-2 font-bold">E-mail:</span>
        <input type="email" name="email" placeholder="Digite o seu email" 
        className="rounded-lg  p-2 shadow-sm" onChange={(e) => updateFieldHandler("email", e.target.value)} value={data.email || ""} required/>
      </label>
    </div>

  )
}

export default UserForm