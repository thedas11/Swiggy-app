const Menu = (props)=>{

    const{types, menu} = props;
    return(
<div>

{/* <h1>{types?.card?.card?.info?.name}</h1> */}
    
<h2>{types?.card?.card?.title}</h2>

{menu?.map((menus)=>{

return <li>{menus?.card?.info?.name}</li>

})}

</div>
    )
}
export default Menu;