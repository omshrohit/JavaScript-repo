# Solution Code

## BMI Project

```javascript
 const form=document.querySelector('form')
    form.addEventListener('submit',function(e){
        e.preventDefault();
        const height=parseInt(document.querySelector("#height").value)
        console.log(height)
        const weight=parseInt(document.querySelector("#weight").value)
        console.log(weight)
        const result=document.querySelector("#result")
        

        if(height === '' || height < 0 || isNaN(height))
        {
            result.innerHTML=`<span>Please Inter Valid Height ${height}</span>`
        }
        
        else if(weight === '' || weight < 0 || isNaN(weight))
        {
            result.innerHTML=`<span>Please Inter Valid weight ${weight}</span>`
        }
        else{
            const bmi=(weight/((height*height)/10000)).toFixed(2)
            if(bmi<=18.6){
                result.style.color='red'
            }
            else if(bmi>18.6 && bmi<24.9)
            {
                result.style.color='green'
            }
            else{
                result.style.color='red'
            }
            result.innerHTML=`<span>${bmi}</span>`
        }
    })
```