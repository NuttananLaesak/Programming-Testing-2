export function handleInput(input) {
    return input.map(item => {
        if (item.name === "Janny" || item.name === "Game") {
            return `<div class="employee-info">
                        <div class="employee-name">ชื่อ: ${item.name}</div>
                        <div class="employee-position">ตำแหน่ง: ${item.position}</div>
                    </div>`;
        } else {
            return `ไม่พบข้อมูลพนักงานชื่อ ${item.name}`;
        }
    });
}
