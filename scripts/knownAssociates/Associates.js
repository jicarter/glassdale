export const Associates = (known__associates) => {
    return `
        <section class="criminal__card">
        <div class='border'>
        <h2>${known__associates.name}</h2>  
        <div>Alibi: ${known__associates.alibi}</div>  
        </div>  
        </section>
        `
}