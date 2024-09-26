<?php

namespace App\Interface;

interface UserRepositoryInterface
{
    public function register($req);

    public function activity($data);
}
