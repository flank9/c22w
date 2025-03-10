let currentMember = null;

function showMember(member) {
    const memberInfo = {
        'Lte': {
            'name': 'cash',
            'image': 'cash.png',
            'description': '#1 fed dodger',
            'songIndex': 1
        },
        'Viscount': {
            'name': 'flank',
            'image': 'flank.png',
            'description': 'nignog',
            'songIndex': 2
        },
        'CEO': {
            'name': 'dorm',
            'image': 'dorm.png',
            'description': '#BLM',
            'songIndex': 3
        },

    };

    const info = memberInfo[member];
    if (!info) return;

    const memberDiv = document.getElementById('member-info');
    const selectedElement = document.querySelector(`[onclick="showMember('${member}')"]`);

    if (currentMember === selectedElement) {
        currentMember.style.color = '';
        document.getElementById(`${currentMember.getAttribute('data-member')}-dot`).innerHTML = '::';
        memberDiv.innerHTML = '';
        currentMember = null;
        playDefaultSong();
        return;
    }

    if (currentMember) {
        currentMember.style.color = '';
        document.getElementById(`${currentMember.getAttribute('data-member')}-dot`).innerHTML = '::';
    }

    selectedElement.style.color = '#8a0000';
    currentMember = selectedElement;
    selectedElement.setAttribute('data-member', member);

    document.querySelectorAll('.yellow').forEach(dot => {
        dot.innerHTML = '::';
    });

    document.getElementById(`${member}-dot`).innerHTML = '<span style="color: #8a0000; margin-top: -2px;">&bull;</span>';

    memberDiv.innerHTML = `
        <img src="${info.image}" class="fade-in" style="height: 120px;" draggable="false">
        <p style="margin-top: 5px; margin-bottom: 0; color: #b90000;">[ ${info.name} ]</p>
        <hr style="border-top: 1px solid #b90000; margin: 3px 0;">
        <p class="glitch" style="margin-top: 5px;">${info.description}</p>
    `;

    changeSong(info.songIndex);
}
