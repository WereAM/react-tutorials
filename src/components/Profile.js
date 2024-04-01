const user = {
    name: "Sade Adu",
    imageUrl : "https://i1.sndcdn.com/artworks-000073739909-m3rv2m-t500x500.jpg",   
    imageSize: 200,
};

export default function Profile(){
    return(
        <>
            <h1>{user.name}</h1>
            <img 
                className="avatar"
                src={user.imageUrl} 
                alt={'Photo of ' + user.name} 
                style = {{
                    width : user.imageSize,
                    height : user.imageSize
                }} 
            />
        </>
    );
}