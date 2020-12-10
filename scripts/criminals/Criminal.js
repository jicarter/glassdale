export const Criminal = (criminal) => {
    return `
        <section class="criminal__card">
        <div class='border'>
        <h2>${criminal.name}</h2>  
        <div>Age: ${criminal.age}</div>  
        <div>Conviction: ${criminal.conviction}</div>  
        <div>Term Start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>  
        <div>Term End: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
        <button class="associateButton" id="${criminal.id}">Associate Alibis</button>
        </div>  
        </section>
        `
}