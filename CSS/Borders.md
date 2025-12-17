# Height, Width, Borders and Background

```css
/* Here we set the background colour,height,width & border */
#firstpara {
  background-color: red;
  height: 100px;
  width: 455px;
  border-width: 4px;

  border-color: black;
  border-style: solid;
  border-radius: 53px;

  /* To write all the border properties in one line we can write them like this */
  border: 4px solid green;
}

/* Here we have different colour and radius of each border */

#secondpara {
  background-color: yellow;
  height: 100px;
  width: 455px;
  border-top: 2px solid rgb(130, 238, 161);
  border-right: 2px solid rgb(0, 200, 255);
  border-left: 2px solid rgb(128, 0, 122);
  border-bottom: 2px solid rgb(0, 13, 255);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 25px;
} 

#thirdpara {
  height: 500px;
  width: 455px;

  /* Backgroud Image */
  background-image: url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFRUVFRcWFRcXFRUVFRgVFxUWFhYVFRgYHSggGBolHRcVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGysmHyYtLS0wLS4tLSstLTItLy0tLS0wLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAQIDBQYABwj/xAA6EAABBAAFAgUBBgQFBQEAAAABAAIDEQQFEiExQVEGEyJhcYEHMkKRobEUI1LRFYLB4fAkM2KS8bL/xAAbAQACAwEBAQAAAAAAAAAAAAABBAACAwUGB//EAC4RAAICAQMEAQIGAgMBAAAAAAABAgMREiExBBNBUSIyYRQjUnGx8IHhQpGhBf/aAAwDAQACEQMRAD8A...");

  border: 2px solid red;
  background-repeat: no-repeat;
  background-position: center center;
}
```
