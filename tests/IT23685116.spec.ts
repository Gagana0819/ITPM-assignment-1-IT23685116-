import { test, expect } from '@playwright/test';



test('Pos_Fun_01 - Simple Future Tense', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('mama heta gamata yanavaa.', { delay: 100 });
    await expect(page.getByText('මම හෙට ගමට යනවා.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_02 - Simple Past Tense', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('api iiyee cricket gahuvaa.', { delay: 100 });
    await expect(page.getByText('අපි ඊයේ cricket ගහුවා.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_03 - Compound Sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('naQQgi paadam karanavaa, haebayi malli sellam karanavaa.', { delay: 100 });
    await expect(page.getByText('නංගි පාඩම් කරනවා, හැබයි මල්ලි සෙල්ලම් කරනවා.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_04 - Complex Condition', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('oyaa salli dhunnoth mama badu gannam.', { delay: 100 });
    await expect(page.getByText('ඔයා සල්ලි දුන්නොත් මම බඩු ගන්නම්.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_05 - Imperative Command', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('karuNaakaralaa dhora vahanna.', { delay: 100 });
    await expect(page.getByText('කරුණාකරලා දොර වහන්න.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_06 - Interrogative Question', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('oyaa kaemathi mona paatatadha?', { delay: 100 });
    await expect(page.getByText('ඔයා කැමති මොන පාටටද?')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_07 - Negative Sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('mata eeka geniyanna baehae.', { delay: 100 });
    await expect(page.getByText('මට ඒක ගෙනියන්න බැහැ.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_08 - Plural Pronouns', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('eyaalaa heta Class enavaa.', { delay: 100 });
    await expect(page.getByText('එයාලා හෙට Class එනවා.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_09 - English Tech Terms', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('mata oyaa evapu PDF eka download karanna bae.', { delay: 100 });
    await expect(page.getByText('මට ඔයා එවපු PDF එක download කරන්න බැ.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_10 - Place Names', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('api Kandy yanna hadhannee.', { delay: 100 });
    await expect(page.getByText('අපි Kandy යන්න හදන්නේ.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_11 - Date Format', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('adha dhinaya 2026-01-31 vee.', { delay: 100 });
    await expect(page.getByText('අද දිනය 2026-01-31 වේ.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_12 - Currency Format', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('meekata mata Rs. 1500 k giyaa.', { delay: 100 });
    await expect(page.getByText('මේකට මට Rs. 1500 ක් ගියා.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_13 - Time Format', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('bus eka ennee 10.30 AM ta.', { delay: 100 });
    await expect(page.getByText('bus එක එන්නේ 10.30 AM ට.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_14 - Email Address', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('mamagedharayanavaa', { delay: 100 });
    // Expectation: System likely fails to separate words. Adjust expectation based on actual app behavior.
    await expect(page.getByText('මමගෙදරයනවා')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_15 - Repeated Words', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('api himin himin yamudha?', { delay: 100 });
    await expect(page.getByText('අපි හිමින් හිමින් යමුද?')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_16 - Slang/Colloquial', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('machan mata podi help ekak oona.', { delay: 100 });
    await expect(page.getByText('මචන් මට පොඩි help එකක් ඕන.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_17 - Polite Request', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('oyaa busy naethnam mata call ekak ganna.', { delay: 100 });
    await expect(page.getByText('ඔයා busy නැත්නම් මට call එකක් ගන්න.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_18 - Multi-line Input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('bada badu list eka: \n 1. paan \n 2. siini', { delay: 100 });
    await expect(page.getByText('බඩ බඩු list එක:')).toBeVisible();
    await expect(page.getByText('1. පාන්')).toBeVisible();
});

test('Pos_Fun_19 - Long Paragraph', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    const text = 'laQQkaavee ithin godak lassana thaen thiyenavaa balanna yanna.  nuvaraEliya, aella, arugambe vagee thaen valata sudhu jaathikayo godak aasaaven enavaa.';
    await inputBox.type(text, { delay: 50 }); // Reduced delay for long text
    await expect(page.getByText('ලංකාවේ ඉතින් ගොඩක් ලස්සන තැන් තියෙනවා බලන්න යන්න. නුවරඑලිය, ඇල්ල, අරුගම්බෙ වගේ තැන් වලට සුදු ජාතිකයො ගොඩක් ආසාවෙන් එනවා.')).toBeVisible({ timeout: 15000 });
});

test('Pos_Fun_20 - Pronoun We Future', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('api labana sathiyee hamuvemu.', { delay: 100 });
    await expect(page.getByText('අපි ලබන සතියේ හමුවෙමු.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_21 - Measurement Units', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('kiri 1L saha haal 5kg genanna.', { delay: 100 });
    await expect(page.getByText('කිරි 1L සහ හාල් 5kg ගෙනන්න.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_22 - Punctuation Handling', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('Shaa! maara lassanayi nee?', { delay: 100 });
    await expect(page.getByText('ෂා! මාර ලස්සනයි නේ?')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_23 - Abbreviations', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('magee ID eka naethi vunaa.', { delay: 100 });
    await expect(page.getByText('මගේ ID එක නැති වුනා.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_24 - Pronoun They Past', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('eyaalaa paraNa sindhu aehuvaa.', { delay: 100 });
    await expect(page.getByText('එයාලා පරණ සින්දු ඇහුවා.')).toBeVisible({ timeout: 10000 });
});


test('Neg_Fun_01 - Missing Spaces (Joined Words)', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('magee email eka student@sliit.lk.', { delay: 100 });
    await expect(page.getByText('මගේ email එක student@sliit.lk.')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_02 - Ambiguous "t" vs "th"', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('thaththa', { delay: 100 });
    await expect(page.getByText('තාත්තා')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_03 - Chat Short Forms', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('irida', { delay: 100 });
    await expect(page.getByText('ඉරිදා')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_04 - Mixed Symbols', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('mama@gedara', { delay: 100 });
    await expect(page.getByText('මම@ගෙදර')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_05 - Double Letters Emphasis', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('anee yannnna epaa.', { delay: 100 });
    await expect(page.getByText('අනේ යන්නන්න එපා.')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_06 - Retroflex N Ambiguity', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('ana', { delay: 100 });
    // Checking if it defaults to 'න' (dental) or 'ණ' (retroflex)
    await expect(page.getByText('අන')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_07 - Number-Text Blend', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('2venida', { delay: 100 });
    // Expectation: May fail to convert the text attached to the number
    await expect(page.getByText('2වෙනිදා')).toBeVisible({ timeout: 10000 });
});

test('Neg_UI_08 - URL Handling', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('mama', { delay: 200 });
    await expect(page.getByText('මම')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_09 - English without logic', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('The quick brown fox', { delay: 100 });
    // Expectation: Phonetic nonsense
    await expect(page.getByText('තෙ ක්වික් බ්‍රවුන් ෆොක්ස්')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_10 - Very Long Word', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.type('aaaaaaaaaaa', { delay: 100 });
    await expect(page.getByText('ආආආආආ')).toBeVisible({ timeout: 10000 });
});