$dir = "c:\Users\Kavin\OneDrive\Shobana_2026\Apr-26\Adi_PushWebSite\push\src\app\Componts\"
$files = Get-ChildItem -Path $dir -Filter *.css

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $newContent = [regex]::Replace($content, 'width:\s*([4-9]\d{2}|\d{4,})px;?', 'width: 100%; max-width: $1px;')
    
    if ($content -cne $newContent) {
        Set-Content -Path $file.FullName -Value $newContent
    }
}
