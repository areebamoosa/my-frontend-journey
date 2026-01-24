# Editable Lists

### How do you handle editable lists in React?

I keep the list in state as an array of objects, use controlled inputs, and update a specific item by mapping over the array and returning a new object for the changed item while keeping the rest unchanged.

```jsx
import React, { useState } from "react";

const Note = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "",
      content: "",
    },
  ]);

  return (
    <>
      <div className="note text-white">
        <input
          type="text"
          value={notes[0].title}
          onChange={(e) =>
            setNotes((prev) =>
              prev.map((note) =>
                note.id === 1 ? { ...note, title: e.target.value } : note
              )
            )
          }
        />

        <input
          type="text"
          value={notes[0].content}
          onChange={(e) =>
            setNotes((prev) =>
              prev.map((note) =>
                note.id === 1 ? { ...note, content: e.target.value } : note
              )
            )
          }
        />
      </div>
    </>
  );
};

export default Note;
```
