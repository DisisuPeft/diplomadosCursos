<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserActivityLog extends Model
{
    use HasFactory;
    protected $table = 'user_activity_log';
    protected $fillable = [
        'user_id', 'status', 'activity', 'date_time'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
