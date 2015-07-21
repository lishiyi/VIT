/**
 * Controllers for the buttons and variables.
 */
$(function(){
/*
    $(document).ready(function(){

        $('.calculating').hide();
    });
    
*/
    $('.start-genetic-algorithm').click(function(){
        $(this).hide();
        $('.pause-genetic-algorithm').show();
        //$('.calculating').show();
        testGeneticSoylent.autoGenerate = true;
        testGeneticSoylent.nextGeneration();
        return false;
    });

    $('.pause-genetic-algorithm').click(function(){
        testGeneticSoylent.autoGenerate = false;
        $(this).hide();
        //$('.calculating').hide();
        $('.start-genetic-algorithm').show();
        return false;
    });

    $('.step-genetic-algorithm').click(function(){
        testGeneticSoylent.nextGeneration();
        return false;
    });

    $('.reset-genetic-algorithm').click(function(){
        testGeneticSoylent.reset();
        testGeneticSoylent.render();
        return false;
    });

    $('.death-rate').change(function(){
        testGeneticSoylent.deathRate = Number($(this).val());
    });

    $('.population').change(function(){
        testGeneticSoylent.populationSize = Number($(this).val());
    });

    $('.mutation-probability').change(function(){
        testGeneticSoylent.mutationProbability = Number($(this).val());
    });

    $('.mutation-multiplier').change(function(){
        testGeneticSoylent.mutationMultiplier = Number($(this).val());
    });

    $('#inputJSON').val(function(){
        var jsonToRun = $.parseJSON(this.value);
        if(!jsonToRun.ingredients) { jsonToRun.ingredients = {"ingredients": [{"Nothing":""},]}  };
        testGeneticSoylent = new GeneticSoylent({
                    ingredients: convertJSONIngredientsToGeneticIngredients(jsonToRun.ingredients),
                    targetNutrients: convertJSONNutritionToGeneticNutrition(jsonToRun.nutrientTargets)
        });

        testGeneticSoylent.reset();
        testGeneticSoylent.render();
        //Will run antomatically when user's information completed.
        $('.start-genetic-algorithm').hide();
        $('.pause-genetic-algorithm').show();
        //$('.calculating').show();
        testGeneticSoylent.autoGenerate = true;
        testGeneticSoylent.nextGeneration();

    });

    $('#inputJSON').change(function(){
        var jsonToRun = $.parseJSON(this.value);
        if(!jsonToRun.ingredients) { jsonToRun.ingredients = {"ingredients": [{"Nothing":""},]}  };
        testGeneticSoylent = new GeneticSoylent({
                    ingredients: convertJSONIngredientsToGeneticIngredients(jsonToRun.ingredients),
                    targetNutrients: convertJSONNutritionToGeneticNutrition(jsonToRun.nutrientTargets)
        });

        testGeneticSoylent.reset();
        testGeneticSoylent.render();
    });

    $('#clickJSON').click(function(){
        var jsonToRun = {"nutrientTargets": { "calories": 2605.68, "protein": 140, "fat": 56, "carbs": 385.42, "name": "mikewillmadeit@gmail.com", "gender": "Male", "age": 28 }};
        if(!jsonToRun.ingredients) { jsonToRun.ingredients = {"ingredients": [{"Nothing":""},]}  };
        testGeneticSoylent = new GeneticSoylent({
                    ingredients: convertJSONIngredientsToGeneticIngredients(jsonToRun.ingredients),
                    targetNutrients: convertJSONNutritionToGeneticNutrition(jsonToRun.nutrientTargets)
        });

        testGeneticSoylent.reset();
        testGeneticSoylent.render();
    });

    $('#clickJSON2').click(function(){
        var jsonToRun = {"nutrientTargets": { "calories": 3220.2, "protein": 160, "fat": 64, "carbs": 501.05, "name": "sebastian@vit.fitness", "gender": "Male", "age": 21 }};
        if(!jsonToRun.ingredients) { jsonToRun.ingredients = {"ingredients": [{"Nothing":""},]}  };
        testGeneticSoylent = new GeneticSoylent({
                    ingredients: convertJSONIngredientsToGeneticIngredients(jsonToRun.ingredients),
                    targetNutrients: convertJSONNutritionToGeneticNutrition(jsonToRun.nutrientTargets)
        });

        testGeneticSoylent.reset();
        testGeneticSoylent.render();
    });

    $('#clickJSON3').click(function(){
        var jsonToRun = $('#inputJSON').value;
        if(!jsonToRun.ingredients) { jsonToRun.ingredients = {"ingredients": [{"Nothing":""},]}  };
        testGeneticSoylent = new GeneticSoylent({
                    ingredients: convertJSONIngredientsToGeneticIngredients(jsonToRun.ingredients),
                    targetNutrients: convertJSONNutritionToGeneticNutrition(jsonToRun.nutrientTargets)
        });

        testGeneticSoylent.reset();
        testGeneticSoylent.render();
    });
/*
    $('#userJsonToRun').change(function(){
        var jsonToRun = $.parseJSON(this.value);
        if(!jsonToRun.ingredients) { jsonToRun.ingredients = {"ingredients": [{"Nothing":""},]}  };
        testGeneticSoylent = new GeneticSoylent({
                    ingredients: convertJSONIngredientsToGeneticIngredients(jsonToRun.ingredients),
                    targetNutrients: convertJSONNutritionToGeneticNutrition(jsonToRun.nutrientTargets)
        });

        testGeneticSoylent.reset();
        testGeneticSoylent.render();
    });
*/
    function convertJSONIngredientsToGeneticIngredients(ingredients0){

        //document.write("<script type="text/javascript" src="js/defaultJson.js"></script>");
        var ingredients = [
      {
      "persistedAsin": "",
      "name": "Soy Lecithin Granules",
      "form": "Powder",
      "unit": "g",
      "container_size": 11339.8,
      "item_cost": 119.4,
      "source": "Amazon",
      "url": "http://www.bobsredmill.com/soy-lecithin-granules.html",
      "amount": 30,
      "volume": null,
      "volume_unit": "cup",
      "serving": 8,
      "calories": 60,
      "carbs": 1,
      "protein": 0,
      "fat": 4,
      "saturated-fat": 1,
      "monounsaturated-fat": 0,
      "polyunsaturated-fat": 0,
      "omega_3": 0,
      "omega_6": 0,
      "fiber": 0,
      "soluble-fiber": 0,
      "insoluble-fiber": 0,
      "cholesterol": 0,
      "calcium": 0.02,
      "chloride": 0,
      "chromium": 0,
      "copper": 0,
      "iodine": 0,
      "iron": 0.016,
      "magnesium": 0,
      "maganese": 0,
      "molybdenum": 0,
      "phosphorus": 0,
      "potassium": 0,
      "selinium": 0,
      "sodium": 0,
      "sulfur": 0,
      "zinc": 0,
      "vitamin_a": 0,
      "vitamin_b6": 0,
      "vitamin_b12": 0,
      "vitamin_c": 0,
      "vitamin_d": 0,
      "vitamin_e": 0,
      "vitamin_k": 0,
      "thiamin": 0,
      "riboflavin": 0,
      "niacin": 0,
      "folate": 0,
      "panthothenic": 0,
      "biotin": 0,
      "choline": 275,
      "_id": "5581b2621df750831932a316",
      "currency": "$",
      "asin": "",
      "volumeStr": "",
      "id": "5581b2621df750831932a316",
      "maxAmount": 17*8,
      "minAmount": 13*8
    },
    {
      "persistedAsin": "B004VLVG0M",
      "name": "Sea Salt",
      "form": "Powder",
      "unit": "g",
      "container_size": 2267.96,
      "item_cost": 22.5,
      "source": "Amazon (S)",
      "url": "https://www.amazon.com/dp/B004VLVG0M?tag=19-82341-20",
      "amount": 4,
      "volume": null,
      "volume_unit": "cup",
      "serving": 1,
      "calories": 0,
      "carbs": 0,
      "protein": 0,
      "fat": 0,
      "saturated-fat": 0,
      "monounsaturated-fat": 0,
      "polyunsaturated-fat": 0,
      "omega_3": 0,
      "omega_6": 0,
      "fiber": 0,
      "soluble-fiber": 0,
      "insoluble-fiber": 0,
      "cholesterol": 0,
      "calcium": 0,
      "chloride": 0.61,
      "chromium": 0,
      "copper": 0,
      "iodine": 50,
      "iron": 0,
      "magnesium": 0,
      "maganese": 0,
      "molybdenum": 0,
      "phosphorus": 0,
      "potassium": 0,
      "selinium": 0,
      "sodium": 0.39,
      "sulfur": 0,
      "zinc": 0,
      "vitamin_a": 0,
      "vitamin_b6": 0,
      "vitamin_b12": 0,
      "vitamin_c": 0,
      "vitamin_d": 0,
      "vitamin_e": 0,
      "vitamin_k": 0,
      "thiamin": 0,
      "riboflavin": 0,
      "niacin": 0,
      "folate": 0,
      "panthothenic": 0,
      "biotin": 0,
      "choline": 0,
      "_id": "5581b2621df750831932a315",
      "currency": "$",
      "asin": "B004VLVG0M",
      "volumeStr": "",
      "id": "5581b2621df750831932a315",
      "maxAmount": 4,
      "minAmount": 3
    },
    {
      "persistedAsin": "",
      "name": "Sunflower Seeds",
      "form": "Powder",
      "unit": "g",
      "container_size": 11339.8,
      "item_cost": 44,
      "source": "Amazon",
      "url": "http://www.bobsredmill.com/raw-shelled-sunflower-seeds.html",
      "amount": 54,
      "volume": null,
      "volume_unit": "cup",
      "serving": 100,
      "calories": 584,
      "carbs": 20,
      "protein": 21,
      "fat": 51,
      "saturated-fat": 4,
      "monounsaturated-fat": 0,
      "polyunsaturated-fat": 0,
      "omega_3": 0.074,
      "omega_6": 23.048,
      "fiber": 9,
      "soluble-fiber": 0,
      "insoluble-fiber": 0,
      "cholesterol": 0,
      "calcium": 0.078,
      "chloride": 0,
      "chromium": 0,
      "copper": 1.8,
      "iodine": 0,
      "iron": 5.2,
      "magnesium": 325,
      "maganese": 1.9,
      "molybdenum": 0,
      "phosphorus": 0.66,
      "potassium": 0.645,
      "selinium": 53,
      "sodium": 0.009,
      "sulfur": 0,
      "zinc": 5,
      "vitamin_a": 50,
      "vitamin_b6": 1.3,
      "vitamin_b12": 0,
      "vitamin_c": 1.4,
      "vitamin_d": 0,
      "vitamin_e": 33,
      "vitamin_k": 0,
      "thiamin": 1.5,
      "riboflavin": 0.4,
      "niacin": 8.3,
      "folate": 227,
      "panthothenic": 1.13,
      "biotin": 66,
      "choline": 55.1,
      "_id": "5581b2621df750831932a314",
      "currency": "$",
      "asin": "",
      "volumeStr": "",
      "id": "5581b2621df750831932a314"
    },
    {
      "persistedAsin": "",
      "name": "Barley Malt Flour",
      "form": "Powder",
      "unit": "g",
      "container_size": 24947.6,
      "item_cost": 55,
      "source": "Midwest Supplies",
      "url": "http://www.midwestsupplies.com/caramel-crystal-cara-malt.html",
      "amount": 150,
      "volume": null,
      "volume_unit": "cup",
      "serving": 100,
      "calories": 361,
      "carbs": 78.3,
      "protein": 10.28,
      "fat": 1.84,
      "saturated-fat": 0.386,
      "monounsaturated-fat": 0.254,
      "polyunsaturated-fat": 0.953,
      "omega_3": 0.095,
      "omega_6": 0.859,
      "fiber": 7.1,
      "soluble-fiber": 0,
      "insoluble-fiber": 0,
      "cholesterol": 0,
      "calcium": 0.037,
      "chloride": 0.011,
      "chromium": 12.95,
      "copper": 0.27,
      "iodine": 0,
      "iron": 4.71,
      "magnesium": 97,
      "maganese": 1.193,
      "molybdenum": 0,
      "phosphorus": 0.303,
      "potassium": 0.224,
      "selinium": 37.7,
      "sodium": 0.011,
      "sulfur": 0.45099999999999996,
      "zinc": 2.06,
      "vitamin_a": 19,
      "vitamin_b6": 0.655,
      "vitamin_b12": 0,
      "vitamin_c": 0.6,
      "vitamin_d": 0,
      "vitamin_e": 0.57,
      "vitamin_k": 2.2,
      "thiamin": 0.309,
      "riboflavin": 0.308,
      "niacin": 5.636,
      "folate": 38,
      "panthothenic": 0.577,
      "biotin": 0,
      "choline": 0,
      "_id": "5581b2621df750831932a313",
      "currency": "$",
      "asin": "",
      "volumeStr": "",
      "id": "5581b2621df750831932a313"
    },
    {
      "persistedAsin": "",
      "name": "Brown Rice Protein Isolate",
      "form": "Powder",
      "unit": "g",
      "container_size": 24947.6,
      "item_cost": 350,
      "source": "Amazon",
      "url": "r",
      "amount": 20,
      "volume": null,
      "volume_unit": "cup",
      "serving": 27,
      "calories": 100,
      "carbs": 1,
      "protein": 24,
      "fat": 0,
      "saturated-fat": 0,
      "monounsaturated-fat": 0,
      "polyunsaturated-fat": 0,
      "omega_3": 0,
      "omega_6": 0,
      "fiber": 1,
      "soluble-fiber": 0,
      "insoluble-fiber": 0,
      "cholesterol": 0,
      "calcium": 0,
      "chloride": 0,
      "chromium": 0,
      "copper": 0,
      "iodine": 0,
      "iron": 1.2,
      "magnesium": 0,
      "maganese": 0,
      "molybdenum": 0,
      "phosphorus": 0,
      "potassium": 0,
      "selinium": 0,
      "sodium": 0,
      "sulfur": 1.098,
      "zinc": 0,
      "vitamin_a": 0,
      "vitamin_b6": 0,
      "vitamin_b12": 0,
      "vitamin_c": 0,
      "vitamin_d": 0,
      "vitamin_e": 0,
      "vitamin_k": 0,
      "thiamin": 0,
      "riboflavin": 0,
      "niacin": 0,
      "folate": 0,
      "panthothenic": 0,
      "biotin": 0,
      "choline": 0,
      "_id": "5581b2621df750831932a312",
      "currency": "$",
      "asin": "",
      "volumeStr": "",
      "id": "5581b2621df750831932a312"
    },
    {
      "persistedAsin": "B001DB4MFO",
      "name": "Pea Protein Powder",
      "form": "Powder",
      "unit": "g",
      "container_size": 19958.1,
      "item_cost": 245,
      "source": "Amazon",
      "url": "https://www.amazon.com/dp/B001DB4MFO?tag=19-82341-20",
      "amount": 12,
      "volume": null,
      "volume_unit": "cup",
      "serving": 33,
      "calories": 130,
      "carbs": 1,
      "protein": 28,
      "fat": 2,
      "saturated-fat": 0,
      "monounsaturated-fat": 0,
      "polyunsaturated-fat": 0,
      "omega_3": 0,
      "omega_6": 0,
      "fiber": 0.5,
      "soluble-fiber": 0,
      "insoluble-fiber": 0,
      "cholesterol": 0,
      "calcium": 0.04,
      "chloride": 0.33,
      "chromium": 0,
      "copper": 0,
      "iodine": 0,
      "iron": 7,
      "magnesium": 0,
      "maganese": 0,
      "molybdenum": 0,
      "phosphorus": 0,
      "potassium": 0,
      "selinium": 0,
      "sodium": 0.33,
      "sulfur": 0,
      "zinc": 0,
      "vitamin_a": 0,
      "vitamin_b6": 0,
      "vitamin_b12": 0,
      "vitamin_c": 0,
      "vitamin_d": 0,
      "vitamin_e": 0,
      "vitamin_k": 0,
      "thiamin": 0,
      "riboflavin": 0,
      "niacin": 0,
      "folate": 0,
      "panthothenic": 0,
      "biotin": 0,
      "choline": 0,
      "_id": "5581b2621df750831932a311",
      "currency": "$",
      "asin": "B001DB4MFO",
      "volumeStr": "",
      "id": "5581b2621df750831932a311"
    },
    {
      "persistedAsin": "B00028M47C",
      "name": "Nutritional Yeast Powder",
      "form": "Powder",
      "unit": "g",
      "container_size": 4536,
      "item_cost": 98.96,
      "source": "Amazon",
      "url": "https://www.amazon.com/dp/B00028M47C?tag=19-82341-20",
      "amount": 4,
      "volume": null,
      "volume_unit": "cup",
      "serving": 16,
      "calories": 60,
      "carbs": 5,
      "protein": 9,
      "fat": 1,
      "saturated-fat": 0,
      "monounsaturated-fat": 0,
      "polyunsaturated-fat": 0,
      "omega_3": 0,
      "omega_6": 0,
      "fiber": 4,
      "soluble-fiber": 0,
      "insoluble-fiber": 0,
      "cholesterol": 0,
      "calcium": 0,
      "chloride": 0.046,
      "chromium": 0,
      "copper": 0,
      "iodine": 0,
      "iron": 0.4,
      "magnesium": 0,
      "maganese": 0,
      "molybdenum": 0,
      "phosphorus": 0,
      "potassium": 0,
      "selinium": 16.5,
      "sodium": 0,
      "sulfur": 0,
      "zinc": 0,
      "vitamin_a": 0,
      "vitamin_b6": 7.28,
      "vitamin_b12": 9.6,
      "vitamin_c": 0,
      "vitamin_d": 0,
      "vitamin_e": 0,
      "vitamin_k": 0,
      "thiamin": 8.04,
      "riboflavin": 7.67,
      "niacin": 44.8,
      "folate": 720,
      "panthothenic": 0.5,
      "biotin": 0,
      "choline": 0,
      "_id": "5581b2621df750831932a310",
      "currency": "$",
      "asin": "B00028M47C",
      "volumeStr": "",
      "id": "5581b2621df750831932a310",
      "maxAmount": 5*16,
      "minAmount": 3*16
    },
    {
      "persistedAsin": "",
      "name": "Oat Flour",
      "form": "Powder",
      "unit": "g",
      "container_size": 11340,
      "item_cost": 37.3,
      "source": "Bob's Red Mill (4x 22oz)",
      "url": "http://www.bobsredmill.com/whole-grain-oat-flour.html",
      "amount": 100,
      "volume": null,
      "volume_unit": "cup",
      "serving": 100,
      "calories": 400,
      "carbs": 59.2,
      "protein": 14.7,
      "fat": 9.1,
      "saturated-fat": 1.6,
      "monounsaturated-fat": 2.9,
      "polyunsaturated-fat": 3.3,
      "omega_3": 0.145,
      "omega_6": 3.185,
      "fiber": 6.5,
      "soluble-fiber": 3,
      "insoluble-fiber": 3.5,
      "cholesterol": 0,
      "calcium": 0.055,
      "chloride": 0,
      "chromium": 16.14,
      "copper": 0.4,
      "iodine": 0,
      "iron": 4,
      "magnesium": 144,
      "maganese": 4,
      "molybdenum": 200,
      "phosphorus": 0.453,
      "potassium": 0.371,
      "selinium": 34,
      "sodium": 0.019,
      "sulfur": 0.23,
      "zinc": 3.2,
      "vitamin_a": 0,
      "vitamin_b6": 0.1,
      "vitamin_b12": 0,
      "vitamin_c": 0,
      "vitamin_d": 0,
      "vitamin_e": 1,
      "vitamin_k": 3.2,
      "thiamin": 0.7,
      "riboflavin": 0.1,
      "niacin": 1.5,
      "folate": 32,
      "panthothenic": 0.2,
      "biotin": 0,
      "choline": 29.9,
      "_id": "5581b2621df750831932a30f",
      "currency": "$",
      "asin": "",
      "volumeStr": "",
      "id": "5581b2621df750831932a30f"
    },
    {
      "persistedAsin": "B004VLVD50",
      "name": "Brown Rice Flour Brown",
      "form": "Powder",
      "unit": "g",
      "container_size": 11340,
      "item_cost": 26.34,
      "source": "Amazon",
      "url": "https://www.amazon.com/dp/B004VLVD50?tag=19-82341-20",
      "amount": 36,
      "volume": null,
      "volume_unit": "cup",
      "serving": 40,
      "calories": 140,
      "carbs": 31,
      "protein": 3,
      "fat": 1,
      "saturated-fat": 0,
      "monounsaturated-fat": 0,
      "polyunsaturated-fat": 0,
      "omega_3": 0,
      "omega_6": 0,
      "fiber": 2,
      "soluble-fiber": 0,
      "insoluble-fiber": 0,
      "cholesterol": 0,
      "calcium": 0,
      "chloride": 0,
      "chromium": 0,
      "copper": 0,
      "iodine": 0,
      "iron": 0,
      "magnesium": 0,
      "maganese": 0,
      "molybdenum": 0,
      "phosphorus": 0,
      "potassium": 0,
      "selinium": 0,
      "sodium": 0.05,
      "sulfur": 0,
      "zinc": 0,
      "vitamin_a": 0,
      "vitamin_b6": 0,
      "vitamin_b12": 0,
      "vitamin_c": 0,
      "vitamin_d": 0,
      "vitamin_e": 0,
      "vitamin_k": 0,
      "thiamin": 0,
      "riboflavin": 0,
      "niacin": 0,
      "folate": 0,
      "panthothenic": 0,
      "biotin": 0,
      "choline": 0,
      "_id": "5581b2621df750831932a30e",
      "currency": "$",
      "asin": "B004VLVD50",
      "volumeStr": "",
      "id": "5581b2621df750831932a30e"
    },
    {
      "persistedAsin": "B00JYF1J2U",
      "name": "Camu Camu Powder",
      "form": "Powder",
      "unit": "mg",               //g
      "container_size": 2267960, //2267.96
      "item_cost": 255,
      "source": "Amazon",
      "url": "https://www.amazon.com/dp/B00JYF1J2U?tag=19-82341-20",
      "amount": 450, //0.45
      "volume": null,
      "volume_unit": "cup",
      "serving": 1,
      "calories": 0,
      "carbs": 0,
      "protein": 0,
      "fat": 0,
      "saturated-fat": 0,
      "monounsaturated-fat": 0,
      "polyunsaturated-fat": 0,
      "omega_3": 0,
      "omega_6": 0,
      "fiber": 0,
      "soluble-fiber": 0,
      "insoluble-fiber": 0,
      "cholesterol": 0,
      "calcium": 0,
      "chloride": 0,
      "chromium": 0,
      "copper": 0,
      "iodine": 0,
      "iron": 0,
      "magnesium": 0,
      "maganese": 0,
      "molybdenum": 0,
      "phosphorus": 0,
      "potassium": 0.000024, //0.024
      "selinium": 0,
      "sodium": 0,
      "sulfur": 0,
      "zinc": 0,
      "vitamin_a": 0,
      "vitamin_b6": 0,
      "vitamin_b12": 0,
      "vitamin_c": 0.2, //200
      "vitamin_d": 0,
      "vitamin_e": 0,
      "vitamin_k": 0,
      "thiamin": 0,
      "riboflavin": 0,
      "niacin": 0,
      "folate": 0,
      "panthothenic": 0,
      "biotin": 0,
      "choline": 0,
      "_id": "5581b2621df750831932a30d",
      "currency": "$",
      "asin": "B00JYF1J2U",
      "volumeStr": "",
      "id": "5581b2621df750831932a30d",
      "maxAmount": 400,
      "minAmount": 380
    },
    {
      "persistedAsin": "",
      "name": "Seeds, chia seeds, dried",
      "form": "Powder",
      "unit": "g",
      "container_size": 24947.6,
      "item_cost": 350,
      "source": "",
      "url": "",
      "amount": 10,
      "volume": null,
      "volume_unit": "cup",
      "serving": 100,
      "calories": 486,
      "carbs": 42.12,
      "protein": 16.54,
      "fat": 30.74,
      "saturated-fat": 3.33,
      "monounsaturated-fat": 2.309,
      "polyunsaturated-fat": 23.665,
      "omega_3": 17.83,
      "omega_6": 5.835,
      "fiber": 34.4,
      "soluble-fiber": 0,
      "insoluble-fiber": 0,
      "cholesterol": 0,
      "calcium": 0.631,
      "chloride": 0,
      "chromium": 0,
      "copper": 0.924,
      "iodine": 0,
      "iron": 7.72,
      "magnesium": 335,
      "maganese": 2.723,
      "molybdenum": 0,
      "phosphorus": 0.86,
      "potassium": 0.40700000000000003,
      "selinium": 55.2,
      "sodium": 0.016,
      "sulfur": 0.9949999999999999,
      "zinc": 4.58,
      "vitamin_a": 54,
      "vitamin_b6": 0,
      "vitamin_b12": 0,
      "vitamin_c": 1.6,
      "vitamin_d": 0,
      "vitamin_e": 0.5,
      "vitamin_k": 0,
      "thiamin": 0.62,
      "riboflavin": 0.17,
      "niacin": 8.83,
      "folate": 49,
      "panthothenic": 0,
      "biotin": 0,
      "choline": 0,
      "_id": "5581b2621df750831932a30c",
      "currency": "$",
      "asin": "",
      "volumeStr": "",
      "id": "5581b2621df750831932a30c",
      "maxAmount": 25 * 100,
      "minAmount": 15 * 100
    },
    {
      "persistedAsin": "",
      "name": "Syrup, cane",
      "form": "Powder",
      "unit": "g",
      "container_size": 907.185,
      "item_cost": 8,
      "source": "",
      "url": "",
      "amount": 20,
      "volume": null,
      "volume_unit": "cup",
      "serving": 100,
      "calories": 269,
      "carbs": 73.14,
      "protein": 0,
      "fat": 0,
      "saturated-fat": 0,
      "monounsaturated-fat": 0,
      "polyunsaturated-fat": 0,
      "omega_3": 0,
      "omega_6": 0,
      "fiber": 0,
      "soluble-fiber": 0,
      "insoluble-fiber": 0,
      "cholesterol": 0,
      "calcium": 0.013000000000000001,
      "chloride": 0,
      "chromium": 0,
      "copper": 0.02,
      "iodine": 0,
      "iron": 3.6,
      "magnesium": 10,
      "maganese": 0,
      "molybdenum": 0,
      "phosphorus": 0.008,
      "potassium": 0.063,
      "selinium": 0.7,
      "sodium": 0.058,
      "sulfur": 0,
      "zinc": 0.19,
      "vitamin_a": 0,
      "vitamin_b6": 0,
      "vitamin_b12": 0,
      "vitamin_c": 0,
      "vitamin_d": 0,
      "vitamin_e": 0,
      "vitamin_k": 0,
      "thiamin": 0.13,
      "riboflavin": 0.06,
      "niacin": 0.1,
      "folate": 0,
      "panthothenic": 0,
      "biotin": 0,
      "choline": 0,
      "_id": "5581b2621df750831932a30b",
      "currency": "$",
      "asin": "",
      "volumeStr": "",
      "id": "5581b2621df750831932a30b",
      "maxAmount": 30*100,
      "minAmount": 20*100
    },
    {
     "persistedAsin": "",
     "name": "Sunflower lecithin",
     "form": "Powder",
     "unit": "g",
     "container_size": 1360.78,
     "item_cost": 49.99,
     "source": "",
     "url": "",
     "amount": 14,
     "volume": null,
     "volume_unit": "cup",
     "serving": 100,
     "calories": 500,
     "carbs": 0,
     "protein": 0,
     "fat": 53,
     "saturated-fat": 7,
     "monounsaturated-fat": 0,
     "polyunsaturated-fat": 0,
     "omega_3": 0,
     "omega_6": 0,
     "fiber": 0,
     "soluble-fiber": 0,
     "insoluble-fiber": 0,
     "cholesterol": 0,
     "calcium": 0.267,
     "chloride": 0,
     "chromium": 0,
     "copper": 0,
     "iodine": 0,
     "iron": 3.6,
     "magnesium": 0,
     "maganese": 0,
     "molybdenum": 0,
     "phosphorus": 2.733,
     "potassium": 0.933,
     "selinium": 0,
     "sodium": 0,
     "sulfur": 0,
     "zinc": 0,
     "vitamin_a": 0,
     "vitamin_b6": 0,
     "vitamin_b12": 0,
     "vitamin_c": 0,
     "vitamin_d": 0,
     "vitamin_e": 4.44,
     "vitamin_k": 0,
     "thiamin": 0,
     "riboflavin": 0,
     "niacin": 0,
     "folate": 0,
     "panthothenic": 0,
     "biotin": 0,
     "choline": 0,
     "_id": "55956894f6bf78601ef5ae08",
     "currency": "$",
     "asin": "",
     "volumeStr": "",
     "id": "55956894f6bf78601ef5ae08"
   },
    {
      "persistedAsin": "",
      "name": "Spinach (powdered)",
      "form": "Powder",
      "unit": "g",
      "container_size": 453.592,
      "item_cost": 13.49,
      "source": "",
      "url": "http://www.northbaytrading.com/freeze-dried-spinach",
      "amount": 5,
      "volume": null,
      "volume_unit": "cup",
      "serving": 8,
      "calories": 23,
      "carbs": 3.63,
      "protein": 2.86,
      "fat": 0.39,
      "saturated-fat": 0.063,
      "monounsaturated-fat": 0.01,
      "polyunsaturated-fat": 0.165,
      "omega_3": 0.138,
      "omega_6": 0.026,
      "fiber": 2.2,
      "soluble-fiber": 0.55,
      "insoluble-fiber": 1.65,
      "cholesterol": 0,
      "calcium": 0.099,
      "chloride": 0,
      "chromium": 0,
      "copper": 0.13,
      "iodine": 3,
      "iron": 2.71,
      "magnesium": 79,
      "maganese": 0.897,
      "molybdenum": 0,
      "phosphorus": 0.049,
      "potassium": 0.558,
      "selinium": 1,
      "sodium": 0.079,
      "sulfur": 0.088,
      "zinc": 0.53,
      "vitamin_a": 9377,
      "vitamin_b6": 0.195,
      "vitamin_b12": 0,
      "vitamin_c": 28.1,
      "vitamin_d": 0,
      "vitamin_e": 2.03,
      "vitamin_k": 482.9,
      "thiamin": 0.078,
      "riboflavin": 0.189,
      "niacin": 0.724,
      "folate": 194,
      "panthothenic": 0.065,
      "biotin": 2.9,
      "choline": 19.3,
      "_id": "5581b2621df750831932a309",
      "currency": "$",
      "asin": "",
      "volumeStr": "",
      "id": "5581b2621df750831932a309",
      "maxAmount": 6*8,
      "minAmount": 4*8
    },
    {
      "persistedAsin": "",
      "name": "Royal Jelly",
      "form": "Powder",
      "unit": "g",
      "container_size": 1000,
      "item_cost": 124,
      "source": "",
      "url": "",
      "amount": 7,
      "volume": null,
      "volume_unit": "cup",
      "serving": 33.33,
      "calories": 0,
      "carbs": 15,
      "protein": 14,
      "fat": 5,
      "saturated-fat": 0,
      "monounsaturated-fat": 0,
      "polyunsaturated-fat": 0,
      "omega_3": 0,
      "omega_6": 0,
      "fiber": 0,
      "soluble-fiber": 0,
      "insoluble-fiber": 0,
      "cholesterol": 0,
      "calcium": 0.055,
      "chloride": 0,
      "chromium": 0,
      "copper": 1,
      "iodine": 0,
      "iron": 5.5,
      "magnesium": 60,
      "maganese": 0,
      "molybdenum": 0,
      "phosphorus": 0,
      "potassium": 0.6,
      "selinium": 0,
      "sodium": 0,
      "sulfur": 0,
      "zinc": 4,
      "vitamin_a": 0,
      "vitamin_b6": 3.3,
      "vitamin_b12": 0,
      "vitamin_c": 0,
      "vitamin_d": 0,
      "vitamin_e": 0,
      "vitamin_k": 0,
      "thiamin": 1.2,
      "riboflavin": 1.5,
      "niacin": 13,
      "folate": 300,
      "panthothenic": 15,
      "biotin": 0.3,
      "choline": 0,
      "_id": "5581b2621df750831932a308",
      "currency": "$",
      "asin": "",
      "volumeStr": "",
      "id": "5581b2621df750831932a308",
      "maxAmount": 9*33.33,
      "minAmount": 5*33.33
    },
    {
      "persistedAsin": "",
      "name": "Mushroom Powder",
      "form": "Powder",
      "unit": "mg",     // "unit": "g"
      "container_size": 10000000, //10000
      "item_cost": 810,
      "source": "",
      "url": "",
      "amount": 20,
      "volume": null,
      "volume_unit": "cup",
      "serving": 1,
      "calories": 0,
      "carbs": 0,
      "protein": 0,
      "fat": 0,
      "saturated-fat": 0,
      "monounsaturated-fat": 0,
      "polyunsaturated-fat": 0,
      "omega_3": 0,
      "omega_6": 0,
      "fiber": 0,
      "soluble-fiber": 0,
      "insoluble-fiber": 0,
      "cholesterol": 0,
      "calcium": 0,
      "chloride": 0,
      "chromium": 0,
      "copper": 0,
      "iodine": 0,
      "iron": 0,
      "magnesium": 0,
      "maganese": 0,
      "molybdenum": 0,
      "phosphorus": 0,
      "potassium": 0,
      "selinium": 0,
      "sodium": 0,
      "sulfur": 0,
      "zinc": 0,
      "vitamin_a": 0,
      "vitamin_b6": 0,
      "vitamin_b12": 0,
      "vitamin_c": 0,
      "vitamin_d": 40, //40000
      "vitamin_e": 0,
      "vitamin_k": 0,
      "thiamin": 0,
      "riboflavin": 0,
      "niacin": 0,
      "folate": 0,
      "panthothenic": 0,
      "biotin": 0,
      "choline": 0,
      "_id": "5581b2621df750831932a307",
      "currency": "$",
      "asin": "",
      "volumeStr": "",
      "id": "5581b2621df750831932a307",
      "maxAmount": 25,
      "minAmount": 15
    },
    {
      "persistedAsin": "",
      "name": "Leavening agents, baking powder, low-sodium",
      "form": "Powder",
      "unit": "g",
      "container_size": 11339.8,
      "item_cost": 23.3,
      "source": "",
      "url": "http://www.bobsredmill.com/baking-soda.html",
      "amount": 19,
      "volume": null,
      "volume_unit": "cup",
      "serving": 100,
      "calories": 97,
      "carbs": 46.9,
      "protein": 0.1,
      "fat": 0.4,
      "saturated-fat": 0.073,
      "monounsaturated-fat": 0.006,
      "polyunsaturated-fat": 0.121,
      "omega_3": 0.029,
      "omega_6": 0.09,
      "fiber": 2.2,
      "soluble-fiber": 0,
      "insoluble-fiber": 0,
      "cholesterol": 0,
      "calcium": 4.332,
      "chloride": 0,
      "chromium": 0,
      "copper": 0.019,
      "iodine": 0,
      "iron": 8.17,
      "magnesium": 29,
      "maganese": 0.42,
      "molybdenum": 0,
      "phosphorus": 6.869,
      "potassium": 10.1,
      "selinium": 0.2,
      "sodium": 0.09,
      "sulfur": 0,
      "zinc": 0.72,
      "vitamin_a": 0,
      "vitamin_b6": 0,
      "vitamin_b12": 0,
      "vitamin_c": 0,
      "vitamin_d": 0,
      "vitamin_e": 0,
      "vitamin_k": 0,
      "thiamin": 0,
      "riboflavin": 0,
      "niacin": 0,
      "folate": 0,
      "panthothenic": 0,
      "biotin": 0,
      "choline": 0,
      "_id": "5581b2621df750831932a306",
      "currency": "$",
      "asin": "",
      "volumeStr": "",
      "id": "5581b2621df750831932a306",
      "maxAmount": 19*100,
      "minAmount": 15*100
    },
        ];

        $.each(ingredients0, function(key, value){

            //alert("Old value of " + key + " is: " + tempNutrition[key]);
            var inputMax = ingredients0[key]["maxAmount"];

            if(inputMax!=null && inputMax != undefined){
                  ingredients[key]["maxAmount"] = inputMax;
                  alert(inputMax);
            }


            var inputMin = ingredients0[key]["minAmount"];
            if(inputMin!=null && inputMin != undefined){
                  ingredients[key]["minAmount"] = inputMin;
                  alert(inputMin);
            }
            //alert("New value of " + key + " is: " + tempNutrition[key]);
        });

        $.each(ingredients, function(key, value){
            // divide each value by serving size to normalize them
            var servingSize = ingredients[key]["serving"];

            // if servingSize = 0, we use amount instead
            if (!servingSize){
                servingSize = ingredients[key]["amount"];
            }

            // if both are 0, we use 1
            if (!servingSize){
                servingSize = 1;
            }

            // set the nutrient value for each nutrient to the amount in
            // 1 unit of this ingredient (usually 1g, 1pill)
            $.each(value, function(ingredientNutrient, ingredientValue){
                if (Number(ingredients[key][ingredientNutrient])) {
                   ingredients[key][ingredientNutrient] = ingredientValue/servingSize;
               }
            });

            // also, for each ingredient, add a maxAmount
            var inputMax = ingredients[key]["maxAmount"];
            if(inputMax == null || inputMax == undefined)
                  ingredients[key]["maxAmount"] = 300;

            var inputMin = ingredients[key]["minAmount"];
            if(inputMin == null || inputMin == undefined)
                  ingredients[key]["minAmount"] =   0;
            /*
            if(ingredients[key]["name"] == "Camu Camu Powder"){

                  ingredients[key]["maxAmount"] = 100;
                  ingredients[key]["minAmount"] = 1;
            }
            */
            // get the cost of the item per unit of measure
            ingredients[key]["cost"] = ingredients[key]["item_cost"] / ingredients[key]["container_size"];
        });
      
        // Add a maxAmount here for each ingredient 
        

        return ingredients;
    }

    function convertJSONNutritionToGeneticNutrition(nutrition){
        //var newNutrition = [];

//Default Value
        var tempNutrition = {
            "soluble-fiber_max": 0,
            "soluble-fiber": 0,
            "saturated-fat_max": 0,
            "saturated-fat": 0,
            "polyunsaturated-fat_max": 0,
            "polyunsaturated-fat": 0,
            "monounsaturated-fat_max": 0,
            "monounsaturated-fat": 0,
            "insoluble-fiber_max": 0,
            "insoluble-fiber": 0,
            "name": "Sebastian",
            "calories": 2833,
            "calories_max": 0,
            "carbs": 404,
            "carbs_max": 0,
            "protein": 142,
            "protein_max": 0,
            "fat": 63,
            "fat_max": 0,
            "omega_3": 1.6,
            "omega_3_max": 0,
            "omega_6": 17,
            "omega_6_max": 0,
            "fiber": 28,
            "fiber_max": 0,
            "cholesterol": 0,
            "cholesterol_max": 0,
            "calcium": 1,
            "calcium_max": 2.5,
            "chloride": 2.3,
            "chloride_max": 3.6,
            "chromium": 35,
            "chromium_max": 0,
            "copper": 0.9,
            "copper_max": 10,
            "iodine": 150,
            "iodine_max": 1100,
            "iron": 8,
            "iron_max": 45,
            "magnesium": 420,
            "magnesium_max": 0,
            "maganese": 2.3,
            "maganese_max": 11,
            "molybdenum": 45,
            "molybdenum_max": 2000,
            "phosphorus": 0.7,
            "phosphorus_max": 4,
            "potassium": 3.5,
            "potassium_max": 0,
            "selinium": 55,
            "selinium_max": 400,
            "sodium": 1.5,
            "sodium_max": 2.3,
            "sulfur": 2,
            "sulfur_max": 0,
            "zinc": 11,
            "zinc_max": 40,
            "vitamin_a": 3000,
            "vitamin_a_max": 10000,
            "vitamin_b6": 1.3,
            "vitamin_b6_max": 100,
            "vitamin_b12": 2.4,
            "vitamin_b12_max": 0,
            "vitamin_c": 90,
            "vitamin_c_max": 2000,
            "vitamin_d": 600,
            "vitamin_d_max": 4000,
            "vitamin_e": 20,
            "vitamin_e_max": 1000,
            "vitamin_k": 120,
            "vitamin_k_max": 0,
            "thiamin": 1.2,
            "thiamin_max": 0,
            "riboflavin": 1.3,
            "riboflavin_max": 0,
            "niacin": 16,
            "niacin_max": 35,
            "folate": 400,
            "folate_max": 1000,
            "panthothenic": 5,
            "panthothenic_max": 0,
            "biotin": 30,
            "biotin_max": 0,
            "choline": 550,
            "choline_max": 3500
          };

//If the gender is male
        if(nutrition.gender == "Male"){

//1st Case, Male and < 50 years old.
            if(nutrition.age >= 19 && nutrition.age <= 50){
                
                tempNutrition = {
                        "soluble-fiber_max": 0,
                        "soluble-fiber": 0,
                        "saturated-fat_max": 0,
                        "saturated-fat": 0,
                        "polyunsaturated-fat_max": 0,
                        "polyunsaturated-fat": 0,
                        "monounsaturated-fat_max": 0,
                        "monounsaturated-fat": 0,
                        "insoluble-fiber_max": 0,
                        "insoluble-fiber": 0,
                        "name": "Sebastian",
                        "calories": 2833,
                        "calories_max": 0,
                        "carbs": 404,
                        "carbs_max": 0,
                        "protein": 142,
                        "protein_max": 0,
                        "fat": 63,
                        "fat_max": 0,
                        "omega_3": 1.6,
                        "omega_3_max": 0,
                        "omega_6": 17,
                        "omega_6_max": 0,
                        "fiber": 28,
                        "fiber_max": 0,
                        "cholesterol": 0,
                        "cholesterol_max": 0,
                        "calcium": 1,
                        "calcium_max": 2.5,
                        "chloride": 2.3,
                        "chloride_max": 3.6,
                        "chromium": 35,
                        "chromium_max": 0,
                        "copper": 0.9,
                        "copper_max": 10,
                        "iodine": 150,
                        "iodine_max": 1100,
                        "iron": 8,
                        "iron_max": 45,
                        "magnesium": 420,
                        "magnesium_max": 770,
                        "maganese": 2.3,
                        "maganese_max": 11,
                        "molybdenum": 45,
                        "molybdenum_max": 2000,
                        "phosphorus": 0.7,
                        "phosphorus_max": 4,
                        "potassium": 4.7,
                        "potassium_max": 0,
                        "selinium": 55,
                        "selinium_max": 400,
                        "sodium": 1.5,
                        "sodium_max": 2.3,
                        "sulfur": 2,
                        "sulfur_max": 0,
                        "zinc": 11,
                        "zinc_max": 40,
                        "vitamin_a": 3000,
                        "vitamin_a_max": 10000,
                        "vitamin_b6": 1.3,
                        "vitamin_b6_max": 100,
                        "vitamin_b12": 2.4,
                        "vitamin_b12_max": 0,
                        "vitamin_c": 90,
                        "vitamin_c_max": 2000,
                        "vitamin_d": 200,
                        "vitamin_d_max": 4000,
                        "vitamin_e": 15,
                        "vitamin_e_max": 1000,
                        "vitamin_k": 120,
                        "vitamin_k_max": 0,
                        "thiamin": 1.2,
                        "thiamin_max": 0,
                        "riboflavin": 1.3,
                        "riboflavin_max": 0,
                        "niacin": 16,
                        "niacin_max": 35,
                        "folate": 400,
                        "folate_max": 1000,
                        "panthothenic": 5,
                        "panthothenic_max": 0,
                        "biotin": 30,
                        "biotin_max": 0,
                        "choline": 550,
                        "choline_max": 3500
                      };

            }
//2nd Case, Male and greater than 50 years old.
            else if(nutrition.age > 50){
                  tempNutrition = {
                        "soluble-fiber_max": 0,
                        "soluble-fiber": 0,
                        "saturated-fat_max": 0,
                        "saturated-fat": 0,
                        "polyunsaturated-fat_max": 0,
                        "polyunsaturated-fat": 0,
                        "monounsaturated-fat_max": 0,
                        "monounsaturated-fat": 0,
                        "insoluble-fiber_max": 0,
                        "insoluble-fiber": 0,
                        "name": "Sebastian",
                        "calories": 2833,
                        "calories_max": 0,
                        "carbs": 404,
                        "carbs_max": 0,
                        "protein": 142,
                        "protein_max": 0,
                        "fat": 63,
                        "fat_max": 0,
                        "omega_3": 1.6,
                        "omega_3_max": 0,
                        "omega_6": 17,
                        "omega_6_max": 0,
                        "fiber": 28,
                        "fiber_max": 0,
                        "cholesterol": 0,
                        "cholesterol_max": 0,
                        "calcium": 1.2,
                        "calcium_max": 2.0,
                        "chloride": 2.0,
                        "chloride_max": 3.6,
                        "chromium": 30,
                        "chromium_max": 0,
                        "copper": 0.9,
                        "copper_max": 10,
                        "iodine": 150,
                        "iodine_max": 1100,
                        "iron": 8,
                        "iron_max": 45,
                        "magnesium": 420,
                        "magnesium_max": 770,
                        "maganese": 2.3,
                        "maganese_max": 11,
                        "molybdenum": 45,
                        "molybdenum_max": 2000,
                        "phosphorus": 0.7,
                        "phosphorus_max": 3,
                        "potassium": 4.7,
                        "potassium_max": 0,
                        "selinium": 55,
                        "selinium_max": 400,
                        "sodium": 1.3,
                        "sodium_max": 2.3,
                        "sulfur": 2,
                        "sulfur_max": 0,
                        "zinc": 11,
                        "zinc_max": 40,
                        "vitamin_a": 3000,
                        "vitamin_a_max": 10000,
                        "vitamin_b6": 1.7,
                        "vitamin_b6_max": 100,
                        "vitamin_b12": 2.4,
                        "vitamin_b12_max": 0,
                        "vitamin_c": 90,
                        "vitamin_c_max": 2000,
                        "vitamin_d": 400,
                        "vitamin_d_max": 4000,
                        "vitamin_e": 15,
                        "vitamin_e_max": 1000,
                        "vitamin_k": 120,
                        "vitamin_k_max": 0,
                        "thiamin": 1.2,
                        "thiamin_max": 0,
                        "riboflavin": 1.3,
                        "riboflavin_max": 0,
                        "niacin": 16,
                        "niacin_max": 35,
                        "folate": 400,
                        "folate_max": 1000,
                        "panthothenic": 5,
                        "panthothenic_max": 0,
                        "biotin": 30,
                        "biotin_max": 0,
                        "choline": 550,
                        "choline_max": 3500
                      };
            }
        }
//3rd Case, Female and < 50 years old.
        else if(nutrition.gender == "Female"){

            if(nutrition.age >= 19 && nutrition.age <= 50){
                
                tempNutrition = {
                        "soluble-fiber_max": 0,
                        "soluble-fiber": 0,
                        "saturated-fat_max": 0,
                        "saturated-fat": 0,
                        "polyunsaturated-fat_max": 0,
                        "polyunsaturated-fat": 0,
                        "monounsaturated-fat_max": 0,
                        "monounsaturated-fat": 0,
                        "insoluble-fiber_max": 0,
                        "insoluble-fiber": 0,
                        "name": "Sebastian",
                        "calories": 2833,
                        "calories_max": 0,
                        "carbs": 404,
                        "carbs_max": 0,
                        "protein": 142,
                        "protein_max": 0,
                        "fat": 63,
                        "fat_max": 0,
                        "omega_3": 1.6,
                        "omega_3_max": 0,
                        "omega_6": 17,
                        "omega_6_max": 0,
                        "fiber": 28,
                        "fiber_max": 0,
                        "cholesterol": 0,
                        "cholesterol_max": 0,
                        "calcium": 1,
                        "calcium_max": 2.5,
                        "chloride": 2.3,
                        "chloride_max": 3.6,
                        "chromium": 25,
                        "chromium_max": 0,
                        "copper": 0.9,
                        "copper_max": 10,
                        "iodine": 150,
                        "iodine_max": 1100,
                        "iron": 18,
                        "iron_max": 45,
                        "magnesium": 320,
                        "magnesium_max": 770,
                        "maganese": 1.8,
                        "maganese_max": 11,
                        "molybdenum": 45,
                        "molybdenum_max": 2000,
                        "phosphorus": 0.7,
                        "phosphorus_max": 4,
                        "potassium": 4.7,
                        "potassium_max": 0,
                        "selinium": 55,
                        "selinium_max": 400,
                        "sodium": 1.5,
                        "sodium_max": 2.3,
                        "sulfur": 2,
                        "sulfur_max": 0,
                        "zinc": 8,
                        "zinc_max": 40,
                        "vitamin_a": 2333,
                        "vitamin_a_max": 10000,
                        "vitamin_b6": 1.3,
                        "vitamin_b6_max": 100,
                        "vitamin_b12": 2.4,
                        "vitamin_b12_max": 0,
                        "vitamin_c": 75,
                        "vitamin_c_max": 2000,
                        "vitamin_d": 200,
                        "vitamin_d_max": 4000,
                        "vitamin_e": 15,
                        "vitamin_e_max": 1000,
                        "vitamin_k": 90,
                        "vitamin_k_max": 0,
                        "thiamin": 1.1,
                        "thiamin_max": 0,
                        "riboflavin": 1.1,
                        "riboflavin_max": 0,
                        "niacin": 14,
                        "niacin_max": 35,
                        "folate": 400,
                        "folate_max": 1000,
                        "panthothenic": 5,
                        "panthothenic_max": 0,
                        "biotin": 30,
                        "biotin_max": 0,
                        "choline": 425,
                        "choline_max": 3500
                      };

            }
//4th Case, Female and greater than 50 years old.
            else if(nutrition.age > 50){
                  tempNutrition = {
                        "soluble-fiber_max": 0,
                        "soluble-fiber": 0,
                        "saturated-fat_max": 0,
                        "saturated-fat": 0,
                        "polyunsaturated-fat_max": 0,
                        "polyunsaturated-fat": 0,
                        "monounsaturated-fat_max": 0,
                        "monounsaturated-fat": 0,
                        "insoluble-fiber_max": 0,
                        "insoluble-fiber": 0,
                        "name": "Sebastian",
                        "calories": 2833,
                        "calories_max": 0,
                        "carbs": 404,
                        "carbs_max": 0,
                        "protein": 142,
                        "protein_max": 0,
                        "fat": 63,
                        "fat_max": 0,
                        "omega_3": 1.6,
                        "omega_3_max": 0,
                        "omega_6": 17,
                        "omega_6_max": 0,
                        "fiber": 28,
                        "fiber_max": 0,
                        "cholesterol": 0,
                        "cholesterol_max": 0,
                        "calcium": 1,
                        "calcium_max": 2.5,
                        "chloride": 2.0,
                        "chloride_max": 3.6,
                        "chromium": 20,
                        "chromium_max": 0,
                        "copper": 0.9,
                        "copper_max": 10,
                        "iodine": 150,
                        "iodine_max": 1100,
                        "iron": 8,
                        "iron_max": 45,
                        "magnesium": 320,
                        "magnesium_max": 770,
                        "maganese": 1.8,
                        "maganese_max": 11,
                        "molybdenum": 45,
                        "molybdenum_max": 2000,
                        "phosphorus": 0.7,
                        "phosphorus_max": 3,
                        "potassium": 4.7,
                        "potassium_max": 0,
                        "selinium": 55,
                        "selinium_max": 400,
                        "sodium": 1.3,
                        "sodium_max": 2.3,
                        "sulfur": 2,
                        "sulfur_max": 0,
                        "zinc": 8,
                        "zinc_max": 40,
                        "vitamin_a": 2333,
                        "vitamin_a_max": 10000,
                        "vitamin_b6": 1.5,
                        "vitamin_b6_max": 100,
                        "vitamin_b12": 2.4,
                        "vitamin_b12_max": 0,
                        "vitamin_c": 75,
                        "vitamin_c_max": 2000,
                        "vitamin_d": 400,
                        "vitamin_d_max": 4000,
                        "vitamin_e": 15,
                        "vitamin_e_max": 1000,
                        "vitamin_k": 90,
                        "vitamin_k_max": 0,
                        "thiamin": 1.1,
                        "thiamin_max": 0,
                        "riboflavin": 1.1,
                        "riboflavin_max": 0,
                        "niacin": 14,
                        "niacin_max": 35,
                        "folate": 400,
                        "folate_max": 1000,
                        "panthothenic": 5,
                        "panthothenic_max": 0,
                        "biotin": 30,
                        "biotin_max": 0,
                        "choline": 425,
                        "choline_max": 3500
                      };

            }

        }
        

        $.each(nutrition, function(key, value){

            //alert("Old value of " + key + " is: " + tempNutrition[key]);
            tempNutrition[key] = value;
            //alert("New value of " + key + " is: " + tempNutrition[key]);
        });

        var newNutrition = [];

        $.each(tempNutrition, function(key, value){
            // get the name of the trueKey, which doesn't include _max
            // later, we will put the value of _max into the key max of the nutrient trueKey
            var trueKey = key.replace("_max","");

            // if the object for this nutrient doesn't exist yet, add it
            // but only if the value > 0
            if (!newNutrition[trueKey] && value > 0){
                newNutrition[trueKey] = {};
            }

            // if this is a _max nutrition key, add it as the max value to trueKey
            if (key.indexOf("_max") >= 0 && value > 0){
                newNutrition[trueKey.replace("_max","")]["max"] = value;
                //newNutrition[trueKey]["min"] = 0;
                newNutrition[trueKey]["importanceFactor"] = 1;
            }

            // otherwise take this value as the min and set the default importanceFactor
            // but only if the min value is > 0
            else if (value > 0) {
                newNutrition[trueKey]["min"] = value;
                newNutrition[trueKey]["importanceFactor"] = 1;
                // we'll need to add a max for all values, so
                // if it's othrewise undefined, we choose min*10
                if (!newNutrition[trueKey]["max"]){
                    newNutrition[trueKey]["max"] = newNutrition[trueKey]["min"] * 10;
                }
            }
        });

        // we delete "name","gender","age", since it's not a nutrient
        delete newNutrition["name"];
        delete newNutrition["gender"];
        delete newNutrition["age"];

        // we make the calorie defaults more reasonable
        newNutrition["calories"]["max"] = newNutrition["calories"]["min"] + 100;
        newNutrition["calories"]["min"] = newNutrition["calories"]["min"] - 100;

        newNutrition["carbs"]["max"] = newNutrition["carbs"]["min"] + 20;
        newNutrition["carbs"]["min"] = newNutrition["carbs"]["min"] - 20;

        newNutrition["fat"]["max"] = newNutrition["fat"]["min"] + 10;
        newNutrition["fat"]["min"] = newNutrition["fat"]["min"] - 10;

        newNutrition["protein"]["max"] = newNutrition["protein"]["min"] + 10;
        newNutrition["protein"]["min"] = newNutrition["protein"]["min"] - 10;

        // also add a cost target
        newNutrition["cost"] = {
            min: 0,
            max: 10,
            importanceFactor: 1
        };

        return newNutrition;
    }

    // Get parameter from URL
    // Taken from: https://gist.github.com/varemenos/2531765
    function getUrlVar(key){
        var result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search);
        return result && unescape(result[1]) || "";
    }

    $(document).ready(function() {
        var loadRecipe = getUrlVar("recipe");
        if (loadRecipe) {
            //var queryString = "http://diy.soylent.me/recipes/" + loadRecipe + "/json?callback=?";
            var queryString = "https://github.com/lishiyi/Nutrient-Calculator/blob/master/js/json.js";
            // As always, thanks stackoverflow:
            // http://stackoverflow.com/questions/6809053/simple-jquery-php-and-jsonp-example
            $.getJSON(queryString,'geneticCallback',function(dataToLoad){
                testGeneticSoylent = new GeneticSoylent({
                            ingredients: convertJSONIngredientsToGeneticIngredients(dataToLoad.ingredients),
                            targetNutrients: convertJSONNutritionToGeneticNutrition(dataToLoad.nutrientTargets)
                });

                testGeneticSoylent.reset();
                testGeneticSoylent.render();
            });
        }
    });

    testGeneticSoylent.render();
});
